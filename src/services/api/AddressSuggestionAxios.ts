import axios from "axios";

// creating an api for nominatim openstreetmap
export const nominatimApi = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
  params: {
    format: "json",
    addressdetails: 1,
    limit: 5,
    "accept-language": "en", // Set language preference
  },
});
