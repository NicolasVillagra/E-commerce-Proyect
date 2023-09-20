import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "./../db.js";

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    googleUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // Borrado lógico
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // createdAt  // updatedAt
  },
  {
    timestamps: true,
  }
);

export default Usuarios;
