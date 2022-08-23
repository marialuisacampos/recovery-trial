import { Sequelize } from "sequelize";
import 'dotenv/config';

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASS;

export const db = new Sequelize("recovery", user, password, {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
});
