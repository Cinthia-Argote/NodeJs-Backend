import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import sequelize from './config/sequelize';
import albumsRouter from './routes/album.routes';
import artistsRouter from './routes/artist.routes';

const app = express();

// cors: para permitir el acceso a la API desde otro origen(dominio), este caso cualquier dominio.
app.use(cors());

// json: json parser para parsear los requests al formato json
app.use(express.json());

// logger para ver los requests al servicio
app.use(morgan("dev"));

// sincronizar la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

//"/album" rutas para el manejo de albums
app.use("/album", albumsRouter);
app.use("/artist", artistsRouter);

// inicializacion del servicio para que escuche las peticiones por el API_PORT
const API_PORT = process.env.PORT || 3000;

app.listen(API_PORT, () => {
  console.log("server listening on port: " + API_PORT);
});
