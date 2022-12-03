class House {
    id: number;
    name: string;
    description: string;
    address: string;
    university: string;
    houseType: string;
    images: { url: string; key: number }[];

    static create(data: House) {
        const house = new House();
        house.id = data.id;
        house.name = data.name;
        house.description = data.description;
        house.address = data.address;
        house.university = data.university;
        house.houseType = data.houseType;
        house.images = data.images;
        return house;
    }
}

export default House;
