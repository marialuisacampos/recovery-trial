import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email: string, senha: string) {
  try {
<<<<<<< HEAD
    const request = await Api.post("login", { email, senha });
=======
    const request = await Api.post("/users/login", { email, senha });
>>>>>>> 845c670 (Init get request ate page main)
    return request.data;
  } catch (error) {
    return null;
  }
}
