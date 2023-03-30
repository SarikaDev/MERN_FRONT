import axios from "axios";
import { getConfig } from "../config";

export default axios.create({
  baseURL: `${getConfig("API_URL")}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
