export default class Quantity {
    private value: number;
    constructor (value: number) {
        if (value < 1) throw new Error("The quantity cannot be less than zero");
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }
}