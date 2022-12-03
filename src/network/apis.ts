import data from "@data/houses.mock.json";

class Api {
    async getHouseList() {
        return data;
    }
}

export default new Api();
