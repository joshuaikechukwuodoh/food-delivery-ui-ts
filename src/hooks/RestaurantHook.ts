import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../services/api/Restaurants";

export const RestaurantData = useQuery({
  queryKey: ["restaurant"],
  queryFn: getRestaurants,
});
