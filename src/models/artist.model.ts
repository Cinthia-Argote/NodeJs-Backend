import { Table, Column, Model, Scopes, BelongsToMany } from 'sequelize-typescript';

import Album from './album.model';
import AlbumArtist from './albumArtist.model';
import { IArtistAttributes, IArtistCreationAttributes } from './interfaces';


@Scopes(() => ({
  albums: {
    include: [
      {
        model: Album,
        through: { attributes: [] },
      },
    ],
  },
}))

@Table
class Artist extends Model <IArtistAttributes, IArtistCreationAttributes> {
  @Column
  firstName!: string

  @Column
  lastName!: string

  @Column
  birthDate!: Date

  @BelongsToMany(() => Album, () => AlbumArtist)
  albums?: Album[];
}

export default Artist;
