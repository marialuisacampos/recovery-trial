export interface IUser {
  email?: string | null;
  token?: string | null;
}

export interface IContext extends IUser {
  authenticate: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
