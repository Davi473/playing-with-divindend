import AssetGet from "./application/usecase/Asset/Get";
import AssetPost from "./application/usecase/Asset/Post";
import AssetController from "./infra/controller/AssetController";
import { HttpServerExpress } from "./infra/http/httpServer";
import { AssetRepositoryMemory } from "./infra/repository/AssetRepository";

const HTTPSERVER = new HttpServerExpress();
const PORT = 3005;

const REPOSITORY = new AssetRepositoryMemory();
const ASSETGET = new AssetGet(REPOSITORY);
const ASSETPOST = new AssetPost(REPOSITORY);
new AssetController(HTTPSERVER, ASSETGET, ASSETPOST);

HTTPSERVER.listen(PORT);