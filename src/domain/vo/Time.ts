export default class Time {
    private value: string;
    constructor (value: string) {
        if (!this.isValidISO8601Date(value)) throw new Error("Invalid date");
        this.value = value;
    }

    private isValidISO8601Date(data: string): boolean {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(data)) return false;
      
        const date = new Date(data);
        return !isNaN(date.getTime()) && data === date.toISOString().split("T")[0];
    }

    public getValue(): string {
        return this.value;
    }
}