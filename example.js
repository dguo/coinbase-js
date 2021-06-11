/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const {Coinbase} = require("./build");

(async function main() {
    const coinbase = new Coinbase({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        apiVersion: process.env.API_VERSION,
    });

    try {
        const response = await coinbase.getAccounts();

        console.dir(response, {depth: null});
    } catch (error) {
        console.error(error);
    }
})();
