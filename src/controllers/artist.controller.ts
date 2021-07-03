import ArtistModel from '../models/artist.model';
import { IArtistAttributes } from '../models/interfaces';

const findAll = () => {
  return ArtistModel.findAll();
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

export default { findAll, create, update, destroy };
