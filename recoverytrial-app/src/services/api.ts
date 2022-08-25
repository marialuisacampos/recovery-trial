import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import 'dotenv/config';

export const Api = axios.create({
  baseURL: process.env.API,
});