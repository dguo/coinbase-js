import crypto from "crypto";

import axios, {AxiosInstance} from "axios";
import rax from "retry-axios";

import {Account, Options} from "./types";

export {Account, AccountType} from "./types";

export class Coinbase {
    #axiosInstance: AxiosInstance;
    #apiKey: string | null;
    #apiSecret: string | null;
    #apiVersion: string | null;
    mockMode: boolean;

    constructor(options?: Options) {
        this.#axiosInstance = axios.create({
            baseURL: "https://api.coinbase.com",
            ...options?.axiosConfig,
        });
        this.#axiosInstance.defaults.raxConfig = {
            instance: this.#axiosInstance,
        };
        rax.attach(this.#axiosInstance);

        this.#apiKey = options?.apiKey ?? null;
        this.#apiSecret = options?.apiSecret ?? null;
        this.#apiVersion = options?.apiVersion ?? null;
        this.mockMode = options?.mockMode ?? false;
    }

    #useMocks(options?: Options): boolean {
        if (typeof options?.mockMode === "boolean") {
            return options.mockMode;
        }

        return this.mockMode;
    }

    #getAuthenticationHeaders(
        method: string,
        path: string,
        body?: string
    ): {timestamp: number; signature: string} {
        const secondsSinceEpoch = Math.floor(new Date().getTime() / 1000);

        let data = secondsSinceEpoch + method + path;
        if (body) {
            data += body;
        }
        const signature = crypto
            .createHmac("sha256", this.#apiSecret as string)
            .update(data)
            .digest("hex");

        return {
            timestamp: secondsSinceEpoch,
            signature,
        };
    }

    async getAccounts(options?: Options): Promise<Account[]> {
        const method = "GET";
        const path = "/v2/accounts";
        const {signature, timestamp} = this.#getAuthenticationHeaders(
            method,
            path
        );

        const response = await this.#axiosInstance.request({
            method,
            url: path,
            headers: {
                "CB-ACCESS-KEY": this.#apiKey,
                "CB-ACCESS-SIGN": signature,
                "CB-ACCESS-TIMESTAMP": timestamp,
                "CB-VERSION": this.#apiVersion,
                ...options?.axiosConfig?.headers,
            },
            ...options?.axiosConfig,
        });
        return response.data;
    }
}
