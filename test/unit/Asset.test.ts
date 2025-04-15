import Asset from "../../src/domain/entity/Asset";
import Name from "../../src/domain/vo/Name";

test("Asset", () => {
    const asset = Asset.create("VALE3", "stock", 3, 54.20, 0.02, "buy", "2025-03-15");
    expect(asset.totalAmount()).toBe(162.6);
    expect(asset.totalAmountWithTaxa()).toBe(162.66);
});

test("Currency Invalid", async () => {
    await expect(new Name("")).rejects.toThrow("This type of currency does not exist");
});

describe("Currency Invalid", () => {
    const invalidCurrencies = ["", "123", "USDOLLAR", null, undefined, "€€€", "R$ ", "BTC123"];

    test.each(invalidCurrencies)("should throw error for invalid currency: '%s'", async (name: any) => {
        expect(() => new Name(name)).toThrow("This type of currency does not exist");
    });
});