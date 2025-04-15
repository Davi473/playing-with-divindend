import Category from "../vo/Category";
import Name from "../vo/Name";
import Quantity from "../vo/Quantity";
import Price from "../vo/Price";
import Taxa from "../vo/Taxa";
import Type from "../vo/Type";
import Time from "../vo/Time";

export default class Asset {
    private name: Name;
    private category: Category;
    private quantity: Quantity;
    private price: Price;
    private taxa: Taxa;
    private type: Type;
    private time: Time;

    constructor (
        readonly id: string,
        name: string, 
        category: string, 
        quantity: number,
        price: number, 
        taxa: number, 
        type: string, 
        time: string
    ) {
        this.name = new Name(name);
        this.category = new Category(category);
        this.quantity = new Quantity(quantity);
        this.price = new Price(price);
        this.taxa = new Taxa(taxa);
        this.type = new Type(type);
        this.time = new Time(time);
    }

    // GET
    public getName(): string {
        return this.name.getValue();
    }

    public getCategory(): string {
        return this.category.getValue();
    }

    public getQuantity(): number {
        return this.quantity.getValue();
    }

    public getPrice(): number {
        return this.price.getValue();
    }

    public getTaxa(): number {
        return this.taxa.getValue();
    }

    public getType(): string {
        return this.type.getValue();
    }

    public getTime(): string {
        return this.time.getValue();
    }

    // MÉTODOS

    static create(
        name: string, 
        category: string, 
        quantity: number,
        price: number, 
        taxa: number, 
        type: string, 
        time: string
    ): Asset {
        const id = crypto.randomUUID();
        return new Asset(id, name, category, quantity, price, taxa, type, time);
    }

    public totalAmount(): number {
        const value = (this.getPrice() * this.getQuantity());
        return Number(value.toFixed(2));
    }

    public totalAmountWithTaxa(): number {
        const value = (this.getPrice() * this.getQuantity()) + (this.getTaxa() * this.getQuantity());
        return Number(value.toFixed(2));
    }
}