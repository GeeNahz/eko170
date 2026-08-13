import axios from "axios";
import { API_V1_BASE_PATH } from "@/lib/constants";

export const httpClient = axios.create({
  baseURL: API_V1_BASE_PATH,
  headers: { "Content-Type": "application/json" },
});
