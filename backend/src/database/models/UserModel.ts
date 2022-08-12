import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  p_atividade_fisica: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fraqueza_muscular: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  dificuldade_respiratoria: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  perda_de_memoria: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  acidente_em_12_meses: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  hipertensao: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  diabetes: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  doenca_cardiovasculares: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  doencas_pulmonares: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  ultimo_acesso: {
    type: DataTypes.DATE,
  },
});
