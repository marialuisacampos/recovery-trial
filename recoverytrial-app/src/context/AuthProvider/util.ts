import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  const userToken = `token=${user?.token}`
  document.cookie = userToken
  const userEmail = `email=${user?.email}`
  document.cookie = userEmail
}

export function getUserLocalStorage() {

  function getCookie(name: string) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {

      begin = cookies.indexOf(prefix);

      if (begin != 0) {
        return null;
      }

    } else {
      begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end == -1) {
      end = cookies.length;
    }

    return unescape(cookies.substring(begin + prefix.length, end));
  }

  const getTokenCookies = getCookie("token")
  const getEmailCookies = getCookie("email")
  const user = {
    token: getTokenCookies,
    user: getEmailCookies
  }

  if (!getTokenCookies || !getEmailCookies) {
    return null;
  }

  return user ?? null;
}

export async function LoginRequest(email: string, senha: string) {
  try {
    const request = await Api.post("/users/login", { email, senha });
    return request.data;
  } catch (error) {
    return null;
  }
}
