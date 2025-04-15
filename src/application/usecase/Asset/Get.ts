import AssetRepository from "../../../infra/repository/AssetRepository";
import UseCase from "../UseCase";

export default class AssetGet implements UseCase {
    constructor (
        private readonly repository: AssetRepository
    ) {}

    public async execute(): Promise<Output> {
        const assets = await this.repository.findAll();
        const output: any[] = [];
        assets.forEach(asset => {
            output.push({
                id: asset.id, name: asset.getName(), category: asset.getCategory(),
                quantity: asset.getQuantity(), price: asset.getPrice(), taxa: asset.getTaxa(),
                type: asset.getType(), time: asset.getTime()
            });
        });
        return output;
    }
}

type Output = {
    id: string, name: string,
    category: string, price: number,
    taxa: number, type: string, time: string
}[];