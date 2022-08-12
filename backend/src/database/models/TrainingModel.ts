import { DataTypes } from "sequelize";
import { db } from "../db";

export const TrainingModel = db.define("training", {
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
