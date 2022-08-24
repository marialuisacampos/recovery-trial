import express from "express";
import { db } from "./database/db";
import { router } from "./routes";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(router);

const serverPort = process.env.SERVER_PORT;

app.listen(serverPort || 3001, async () => {
  await db.sync();
  console.log(`App running`);
});
