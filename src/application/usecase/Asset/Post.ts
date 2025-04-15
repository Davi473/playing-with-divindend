import Asset from "../../../domain/entity/Asset";
import AssetRepository from "../../../infra/repository/AssetRepository";
import UseCase from "../UseCase";

export default class AssetPost implements UseCase {
    constructor (
        private readonly repository: AssetRepository
    ) {}

    public async execute(input: Input): Promise<Ouput> {
        const { name, category, quantity, price, taxa, type, time } = input;
        const asset = Asset.create(name, category, quantity, price, taxa, type, time);
        await this.repository.save(asset);
        const output = { message: "Saved successfully", id: asset.id };
        return output;
    }
}

type Input = {
    name: string;
    category: string;
    quantity: number;
    price: number; 
    taxa: number;
    type: string,
    time: string
}

type Ouput = {
    message: string,
    id: string
}