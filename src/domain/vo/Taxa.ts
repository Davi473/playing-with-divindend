export default class Taxa {
    private value: number;
    constructor (value: number) {
        if (value <= 0) throw new Error("Taxa cannot be less than or equal to zero");
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }
}