/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const axios = require("axios");

const {Coinbase} = require("./build");

(async function main() {
    const coinbase = new Coinbase({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        apiVersion: process.env.API_VERSION
    });

    try {
        // const response = await coinbase.getAccounts();

        const response = await coinbase.getExchangeRates();

        // const response = await coinbase.sendMoney({
        //     accountId: process.env.SEND_MONEY_FROM_ACCOUNT_ID,
        //     to: process.env.SEND_MONEY_TO,
        //     amount: "0.21",
        //     currency: "USD",
        //     description: "Test transfer",
        //     skipNotifications: true,
        //     destinationTag: process.env.SEND_MONEY_TO_MEMO
        // });

        console.dir(response, {depth: null});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error);
        }
    }
})();
