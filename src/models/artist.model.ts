import { Optional } from 'sequelize';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Album from './album.model'

interface ArtistAttributes {
  id: number;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}

interface ArtistCreationAttributes extends Optional<ArtistAttributes, 'id'> {}

@Table
class Artist extends Model <ArtistAttributes, ArtistCreationAttributes> {
  @Column
  firstName!: string

  @Column
  lastName!: string

  @Column
  birthDate!: Date

  @ForeignKey(() => Album)
  @Column
  albumId?: number

  @BelongsTo(() => Album)
  album?: Album
}

export default Artist;
