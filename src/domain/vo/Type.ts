enum Types {
    input = "INPUT",
    jcp = "JCP",
    dividend = "DIVIDEND",
    buy = "BUY",
    sell = "SELL",
    amortization = "AMORTIZATION"
}

export default class Type {
    private value: string;
    constructor (value: string) {
        if (!value) throw new Error("Type cannot be empty");
        if (value.includes("'")) throw new Error("You can't send quotes");
        const key = value.toLowerCase() as keyof typeof Types;
        if (!(key in Types)) throw new Error("There is no such category");
        this.value = Types[key];
    }

    public getValue(): string {
        return this.value;
    }
}