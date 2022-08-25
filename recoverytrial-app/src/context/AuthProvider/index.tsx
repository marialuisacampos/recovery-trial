import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);


  async function authenticate(email: string, senha: string) {
    const response = await LoginRequest(email, senha);
    const payload = { token: response.token, email };
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    (function () {
      var cookies = document.cookie.split("; ");
      for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
          var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
          var p = location.pathname.split('/');
          document.cookie = cookieBase + '/';
          while (p.length > 0) {
            document.cookie = cookieBase + p.join('/');
            p.pop();
          };
          d.shift();
        }
      }
    })();
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
