import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_LOCAL, PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_LOCAL}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

export default sequelize;
