import { Optional } from 'sequelize';
import { Table, Model, Column, HasMany } from 'sequelize-typescript';

import Artist from './artist.model';

interface AlbumAttributes {
  id: number;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}

interface AlbumCreationAttributes extends Optional<AlbumAttributes, 'id'> {}

@Table
class Album extends Model <AlbumAttributes, AlbumCreationAttributes> {
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
