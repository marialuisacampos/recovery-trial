export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_HOST: string;
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASS: string;
      DATABASE_PORT: number;
      SECRET: string;
      SENDGRID_API_KEY: string;
      PORT: string;
    }
  }

  namespace Express {
    interface Request {
      headers: { authorization: string };
      status;
    }
  }
}
