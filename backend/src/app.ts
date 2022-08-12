import express from "express";
import { Sequelize } from "sequelize";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("Olá");
    });
  }
}

export default new App().express;
