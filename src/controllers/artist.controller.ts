import AlbumArtist from '../models/albumArtist.model';
import ArtistModel from '../models/artist.model';
import { IArtistAttributes } from '../models/interfaces';

const findAll = () => {
  return ArtistModel.scope('albums').findAll();
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

const addAlbum = (artistId: string, albumId: string) => {
  return AlbumArtist.create({
    artistId, albumId
  });
}

const removeAlbum = (artistId: string, albumId: string) => {
  return AlbumArtist.destroy({ where: {
    artistId, albumId
  }});
}

export default { addAlbum, create, destroy, findAll, finById, removeAlbum, update };
