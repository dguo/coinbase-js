import {AxiosRequestConfig} from "axios";
import {RetryConfig} from "retry-axios";

export interface Options {
    axiosConfig?: AxiosRequestConfig & {raxConfig?: RetryConfig};
    apiKey?: string;
    apiSecret?: string;
    apiVersion?: string;
    mockMode?: boolean;
}

interface Pagination {
    ending_before: string | null;
    starting_after: string | null;
    previous_ending_before: string | null;
    next_starting_after: string | null;
    limit: number;
    order: "desc" | "asc";
    previous_uri: string | null;
    next_uri: string | null;
}

export type AccountType = "wallet" | "fiat" | "vault";

export interface Account {
    id: string;
    name: string;
    primary: boolean;
    type: AccountType;
    currency: {
        code: string;
        name: string;
        color: string;
        sort_index: number;
        exponent: number;
        type: string;
        address_regex: string;
        asset_id: string;
        slug: string;
    };
    balance: {
        amount: string;
        currency: string;
    };
    created_at: string | null;
    updated_at: string | null;
    resource: "account";
    resource_path: string;
    allow_deposits: boolean;
    allow_withdrawals: boolean;
}

export interface RawGetAccountsResponse {
    pagination: Pagination;
    data: Account[];
}

export interface GetAccountsResponse {
    nextPage: string | null;
    accounts: Account[];
}
