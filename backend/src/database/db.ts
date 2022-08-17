import { Sequelize } from "sequelize";

export const db = new Sequelize("recovery", "root", "root", {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
});
