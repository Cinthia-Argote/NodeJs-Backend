import { Sequelize } from 'sequelize-typescript';
import Album from '../models/album.model';
import Artist from '../models/artist.model';
import AlbumArtist from '../models/albumArtist.model';

const sequelize = new Sequelize({
  database: process.env.NAME_DB || 'home_music_db',
  dialect: 'mysql',
  username: process.env.USERNAME_DB || 'root',
  password: process.env.PASSWORD_DB || 'root',
  models: [Album, Artist, AlbumArtist],
});

export default sequelize;