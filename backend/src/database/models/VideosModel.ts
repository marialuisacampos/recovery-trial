import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("videos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  link: {
    type: DataTypes.STRING,
  },
  idTreino: {
    type: DataTypes.INTEGER,
    references: {
      model: "training",
      key: "id",
    },
  },
});
