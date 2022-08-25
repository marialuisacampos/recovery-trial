import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const Api = axios.create({
  baseURL: "https://recovery-app-ufrpe.herokuapp.com/",
});