import express from "express";
import { db } from "./database/db";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(router);

app.listen(8080, async () => {
  await db.sync();
  console.log(`App running on port 3001!`);
});
