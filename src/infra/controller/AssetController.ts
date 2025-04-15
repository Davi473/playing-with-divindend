import HttpServer from "../http/httpServer";
import AssetGet from "../../application/usecase/Asset/Get";
import AssetPost from "../../application/usecase/Asset/Post";

export default class AssetController {
    constructor (
        private readonly httpServer: HttpServer,
        private readonly assetGet: AssetGet,
        private readonly assetPost: AssetPost
    ) {
        this.httpServer.register("get", "/api/asset", async (params: any, body: any) => {
            const output = await this.assetGet.execute();
            return output;
        });
        this.httpServer.register("post", "/api/asset", async (params: any, body: any) => {
            const input = body;
            const output = await this.assetPost.execute(input);
            return output;
        });
    }
}