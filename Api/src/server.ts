import express from 'express';

const app = express();
const port = 3001; 
import router from './Router/mainRouter';
import sequelize from "./db";

// RUTAS
app.use('/', router); 

// INICIAR EL SERVIDOR
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log("Server on PORT :" + port);
    });
  })
  .catch((error: Error) => {
   console.log(error);
  });
