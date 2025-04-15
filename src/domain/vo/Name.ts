export default class Name {
    private value: string;
    constructor (value: string) {
        if (!value) throw new Error("Name cannot be empty");
        if (value.includes("'")) throw new Error("You can't send quotes");
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }
}