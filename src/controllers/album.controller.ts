import AlbumModel from '../models/album.model';
import ArtistModel from '../models/artist.model';
import { IAlbumAttributes } from '../models/interfaces';

const findAll = () => {
  return AlbumModel.findAll({ include: ArtistModel });
};

const finById = (id: string) => {
  return AlbumModel.findByPk(id);
};

const create = (data: IAlbumAttributes) => {
  return AlbumModel.create(data);
};

const update = (data: IAlbumAttributes, id: string) => {
  return AlbumModel.update(data, { where: { id } });
}

const destroy = (id: string) => {
  return AlbumModel.destroy({ where: { id } });
}

export default { create, destroy, findAll, finById, update };
