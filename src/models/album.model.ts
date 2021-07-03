import { Table, Model, Column, HasMany } from 'sequelize-typescript';

import Artist from './artist.model';
import { IAlbumAttributes, IAlbumCreationAttributes } from './interfaces';

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

  @HasMany(() => Artist)
  Artist!: Artist[]
}

export default Album;
