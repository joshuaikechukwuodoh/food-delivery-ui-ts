export interface User {
  id: string;
  name: string;
  role: "customer" | "restaurant" | "delivery" | "admin";
  token: string; // JWT for auth
}
