import data from "@data/houses.mock.json";

class Api {
    async getHouseList() {
        return data;
    }
    async getHouseById(id: number) {
        return data.find((house) => house.id === id);
    }
}

export default new Api();
