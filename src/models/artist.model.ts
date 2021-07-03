import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Album from './album.model';
import { IArtistAttributes, IArtistCreationAttributes } from './interfaces';

@Table
class Artist extends Model <IArtistAttributes, IArtistCreationAttributes> {
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
