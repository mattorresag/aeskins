import axios from "axios";
import { axiosUrl } from "../../utils/envs";

export const api = axios.create({
  baseURL: axiosUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
