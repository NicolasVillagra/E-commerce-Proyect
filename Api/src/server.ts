import express, { Request, Response } from 'express';

const app = express();
const port = 3001; 
const sequelize = require("./db");

// Ruta de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
//sequelize
  //.sync({ alter: true })
  //.then(() => {
    app.listen(port, () => {
      console.log("Server on PORT :" + port);
    });
  //})
  //.catch((error: Error) => {
   // console.log(error);
  ///});
