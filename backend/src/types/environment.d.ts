export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_HOST: string;
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASS: string;
      DATABASE_PORT: number;
    }
  }
}
