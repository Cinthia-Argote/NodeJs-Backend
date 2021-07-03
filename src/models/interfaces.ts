import { Optional } from 'sequelize';

export interface IAlbumAttributes {
  id: number;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}

export interface IAlbumCreationAttributes extends Optional<IAlbumAttributes, 'id'> {}
export interface IArtistAttributes {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
}

export interface IArtistCreationAttributes extends Optional<IArtistAttributes, 'id'> {}
