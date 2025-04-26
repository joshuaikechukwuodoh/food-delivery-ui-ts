import { AddressSuggestion } from "../../types/AddressSuggestion";
import { nominatimApi } from "./AddressSuggestionAxios";

export const getAddressSuggestions = async (
  query: string
): Promise<AddressSuggestion[]> => {
  if (!query || query.length < 1) {
    return []; // Return empty array for short queries
  }

  try {
    const response = await nominatimApi.get("/search", {
      params: { q: query },
    });

    return response.data.map((item: any) => ({
      display_name: item.display_name,
      lat: item.lat,
      lon: item.lon,
    }));
  } catch (error) {
    console.error("Error fetching address suggestions:", error);
    throw new Error("Failed to fetch address suggestions");
  }
};
