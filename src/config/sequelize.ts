import { Sequelize } from 'sequelize-typescript';
import Album from '../models/album.model';
import Artist from '../models/artist.model';
import AlbumArtist from '../models/albumArtist.model';

const sequelize = new Sequelize({
  database: 'home_music_db',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  models: [Album, Artist, AlbumArtist],
});

export default sequelize;