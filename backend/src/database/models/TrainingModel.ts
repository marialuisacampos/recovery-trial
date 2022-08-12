import { DataTypes } from "sequelize/types";
import { db } from "../db";

export const UserModel = db.define("training", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoria: {
    type: DataTypes.STRING,
  },
});
