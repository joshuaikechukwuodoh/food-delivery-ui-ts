import axios from "axios";

// creating an api for nominatim openstreetmap
export const nominatimApi = axios.create({
  baseURL: import.meta.env.VITE_MAP_API_URL,
  params: {
    format: "json",
    addressdetails: 1,
    limit: 5,
    "accept-language": "en", // Set language preference
  },
});

console.log(import.meta.env.VITE_MAP_API_URL);
