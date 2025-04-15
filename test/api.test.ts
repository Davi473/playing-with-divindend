import axios from "axios";

test("Api test get", async () => {
    const asset = {
        name: "VALE3",
        category: "stock",
        quantity: 3,
        price: 54.20,
        taxa: 0.02,
        type: "buy", 
        time: "2025-03-15"
    };

    const valor = await axios.post("http://localhost:3005/api/asset", asset);
});