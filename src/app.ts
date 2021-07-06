import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import sequelize from './config/sequelize';
import albumsRouter from './routes/album.routes';
import artistsRouter from './routes/artist.routes';

const app = express();

// cors: to allow access to the API from another source (domain), in this case any domain.
app.use(cors());

// json: json parser to parse requests to json format
app.use(express.json());

// logger to see the requests to the service
app.use(morgan("dev"));

// synchronize the database
sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

// album, artist management paths
app.use("/album", albumsRouter);
app.use("/artist", artistsRouter);

// initialization of the service so that it listens for requests through the API_PORT
const API_PORT = process.env.PORT || 3000;

app.listen(API_PORT, () => {
  console.log("server listening on port: " + API_PORT);
});
