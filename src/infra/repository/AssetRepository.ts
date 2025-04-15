import Asset from "../../domain/entity/Asset";

export default interface AssetRepository {
    save (asset: Asset): Promise<void>;
    findAll (): Promise<Asset[]>;
}

export class AssetRepositoryMemory implements AssetRepository {
    private assets: Asset[] = [];

    async save(asset: Asset): Promise<void> {
        this.assets.push(asset);
    }

    async findAll(): Promise<Asset[]> {
        return this.assets;
    }
}