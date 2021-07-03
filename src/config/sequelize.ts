import { Sequelize } from 'sequelize-typescript';
import Album from '../models/album.model';
import Artist from '../models/artist.model';

const sequelize = new Sequelize({
  database: 'home_music_db',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  models: [Album, Artist] // or [Player, Team],
});

export default sequelize;