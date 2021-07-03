import ArtistModel from '../models/artist.model';
import AlbumModel from '../models/album.model';
import { IArtistAttributes } from '../models/interfaces';

const findAll = () => {
  return ArtistModel.findAll({ include: AlbumModel });
};

const finById = (id: string) => {
  return ArtistModel.findByPk(id);
};

const create = (data: IArtistAttributes) => {
  return ArtistModel.create(data);
};

const update = (data: IArtistAttributes, id: string) => {
  return ArtistModel.update(data, { where: { id } });
}

const destroy = (id: string) => {
  return ArtistModel.destroy({ where: { id } });
}

export default { create, destroy, findAll, finById, update };
