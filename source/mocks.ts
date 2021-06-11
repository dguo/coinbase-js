import {Account} from "./types";

export const MOCK_ACCOUNT: Account = {
    id: "031533d9-4990-4534-ae26-4da5daead89a",
    name: "BTC Wallet",
    primary: true,
    type: "wallet",
    currency: {
        code: "BTC",
        name: "Bitcoin",
        color: "#F7931A",
        sort_index: 100,
        exponent: 8,
        type: "crypto",
        address_regex:
            "^([13][a-km-zA-HJ-NP-Z1-9]{25,34})|^(bc1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}|[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{59}))$",
        asset_id: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
        slug: "bitcoin"
    },
    balance: {amount: "13.04015842", currency: "BTC"},
    created_at: "2020-03-11T22:13:20Z",
    updated_at: "2021-06-11T13:21:59Z",
    resource: "account",
    resource_path: "/v2/accounts/031533d9-4990-4534-ae26-4da5daead89a",
    allow_deposits: true,
    allow_withdrawals: true
};
