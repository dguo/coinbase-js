import {Coinbase} from "./source";

test("Create an instance", async () => {
    const awair = new Coinbase();
    expect(awair instanceof Coinbase).toEqual(true);
});
