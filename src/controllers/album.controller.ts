import AlbumModel from '../models/album.model';
import AlbumArtist from '../models/albumArtist.model';
import { IAlbumAttributes } from '../models/interfaces';

const findAll = () => {
  return AlbumModel.scope('full').findAll();
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

const addArtist = (albumId: string, artistId: string) => {
  return AlbumArtist.create({
    albumId, artistId
  });
}

const removeArtist = (albumId: string, artistId: string) => {
  return AlbumArtist.destroy({ where: {
    albumId, artistId
  }});
}

export default { addArtist, create, destroy, findAll, finById, removeArtist, update };
