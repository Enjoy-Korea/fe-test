import React from "react";
import { useParams } from "react-router-dom";
import houseData from "../../data/houses.mock.json";

export const ListItemDetailPage = () => {
  const { houseId } = useParams();
  const house = houseData.filter((house) => house.id === Number(houseId))[0];

  return <div>{house.name}</div>;
};
