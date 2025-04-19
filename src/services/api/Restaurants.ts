import api from "./Axios";
import { Restaurants } from "../../types/Restaurant";

export const getRestaurants = async (): Promise<Restaurants[]> => {
  const response = await api.get("/restaurants");
  return response.data;
};
