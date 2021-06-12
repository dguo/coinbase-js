import crypto from "crypto";

import axios, {AxiosInstance} from "axios";
import rax from "retry-axios";
import {v4 as uuidV4} from "uuid";

import {
    GetAccountsResponse,
    GetExchangeRatesOptions,
    GetExchangeRatesResponse,
    GetRequestHeadersOptions,
    Options,
    RawGetAccountsResponse,
    RequestHeaders,
    SendMoneyOptions,
    Transaction
} from "./types";
import {MOCK_ACCOUNT, MOCK_EXCHANGE_RATES} from "./mocks";

export {Account, AccountType} from "./types";

export class Coinbase {
    #axiosInstance: AxiosInstance;
    #apiKey: string | null;
    #apiSecret: string | null;
    #apiVersion: string | null;
    #mockMode: boolean;

    constructor(options?: Options) {
        this.#axiosInstance = axios.create({
            baseURL: "https://api.coinbase.com",
            ...options?.axiosConfig
        });
        this.#axiosInstance.defaults.raxConfig = {
            instance: this.#axiosInstance
        };
        rax.attach(this.#axiosInstance);

        this.#apiKey = options?.apiKey ?? null;
        this.#apiSecret = options?.apiSecret ?? null;
        this.#apiVersion = options?.apiVersion ?? null;
        this.#mockMode = options?.mockMode ?? false;
    }

    #useMocks(options?: Options): boolean {
        if (typeof options?.mockMode === "boolean") {
            return options.mockMode;
        }

        return this.#mockMode;
    }

    #getRequestHeaders(options: GetRequestHeadersOptions): RequestHeaders {
        const apiKey = options.apiKey ?? this.#apiKey;
        if (!apiKey) {
            throw new Error("Missing Coinbase API key");
        }
        const apiSecret = options.apiSecret ?? this.#apiSecret;
        if (!apiSecret) {
            throw new Error("Missing Coinbase API secret");
        }

        const secondsSinceEpoch = Math.floor(new Date().getTime() / 1000);

        let data = secondsSinceEpoch + options.method + options.path;
        if (options.body) {
            data += options.body;
        }
        const signature = crypto
            .createHmac("sha256", apiSecret)
            .update(data)
            .digest("hex");

        return {
            "CB-ACCESS-KEY": apiKey,
            "CB-ACCESS-SIGN": signature,
            "CB-ACCESS-TIMESTAMP": secondsSinceEpoch,
            "CB-VERSION": options.apiVersion ?? this.#apiVersion ?? undefined
        };
    }

    async getAccounts(options?: Options): Promise<GetAccountsResponse> {
        const method = "GET";
        const path = "/v2/accounts";
        const headers = this.#getRequestHeaders({
            method,
            path
        });

        if (this.#useMocks(options)) {
            return {
                accounts: [MOCK_ACCOUNT],
                nextPage: null
            };
        }

        const response = await this.#axiosInstance.request({
            method,
            url: path,
            ...options?.axiosConfig,
            headers: {
                ...headers,
                ...options?.axiosConfig?.headers
            }
        });

        const data: RawGetAccountsResponse = response.data;

        return {
            accounts: data.data,
            nextPage: data.pagination.next_uri
        };
    }

    async sendMoney(options: SendMoneyOptions): Promise<Transaction> {
        const method = "POST";
        const path = `/v2/accounts/${options.accountId}/transactions`;
        const body = {
            type: "send",
            to: options.to,
            amount: options.amount,
            currency: options.currency,
            description: options.description,
            skip_notifications: options.skipNotifications,
            fee: options.fee,
            idem: uuidV4(),
            to_financial_institution: options.toFinancialInstitution,
            financial_institution_website: options.financialInstitutionWebsite
        };
        const headers = this.#getRequestHeaders({
            method,
            path,
            body: JSON.stringify(body)
        });

        const response = await this.#axiosInstance.request({
            method,
            url: path,
            data: body,
            ...options.axiosConfig,
            headers: {
                ...headers,
                ...options.axiosConfig?.headers
            }
        });

        return response.data.data;
    }

    async getExchangeRates(
        options?: GetExchangeRatesOptions
    ): Promise<GetExchangeRatesResponse> {
        if (this.#useMocks(options)) {
            return MOCK_EXCHANGE_RATES;
        }

        const response = await this.#axiosInstance.request({
            method: "GET",
            url: `/v2/exchange-rates`,
            ...options?.axiosConfig,
            params: {
                currency: options?.currency,
                ...options?.axiosConfig?.params
            }
        });

        return response.data.data;
    }
}
