enum Categorys {
    stock = "STOCK",
    fiis = "FIIs",
}

export default class Category {
    private value: string;
    constructor (value: string) {
        if (!value) throw new Error("Category cannot be empty");
        if (value.includes("'")) throw new Error("You can't send quotes");
        const key = value.toLowerCase() as keyof typeof Categorys;
        if (!(key in Categorys)) throw new Error("There is no such category");
        this.value = Categorys[key];
    }

    public getValue(): string {
        return this.value;
    }
}