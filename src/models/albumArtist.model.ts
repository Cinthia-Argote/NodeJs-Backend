import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';

import AlbumModel from './album.model';
import ArtistModel from './artist.model';

@Table
class AlbumArtist extends Model {
  @ForeignKey(() => AlbumModel)
  @Column
  albumId!: number

  @ForeignKey(() => ArtistModel)
  @Column
  artistId!: number
}

export default AlbumArtist;
