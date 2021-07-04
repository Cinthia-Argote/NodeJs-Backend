import { Table, Model, Column, Scopes, BelongsToMany } from 'sequelize-typescript';
import AlbumArtist from './albumArtist.model';

import Artist from './artist.model';
import { IAlbumAttributes, IAlbumCreationAttributes } from './interfaces';

@Scopes(() => ({
  cast: {
    include: [{
      model: Artist,
      through: {attributes: []},
    }],
  },

  full: {
    include: [{
      model: Artist,
      through: {attributes: []},
    }]
  }
}))

@Table
class Album extends Model <IAlbumAttributes, IAlbumCreationAttributes> {
  @Column
  releaseDate!: Date

  @Column
  rating!: number

  @Column
  title!: string

  @Column
  year!: number

  @BelongsToMany(() => Artist, () => AlbumArtist)
  artists?: Artist[]
}

export default Album;
