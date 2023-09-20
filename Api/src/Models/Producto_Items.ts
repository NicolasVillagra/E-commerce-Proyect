import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../db";

const Producto_Items = sequelize.define(
  "Producto",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    //Por relación se creará estos campos
    /* PedidoId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */

    /* ProductoId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Producto_Items;
