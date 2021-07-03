import AlbumModel from '../models/album.model';
import { IAlbumAttributes } from '../models/interfaces';

const findAll = () => {
  return AlbumModel.findAll();
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

export default { findAll, create, update, destroy };
