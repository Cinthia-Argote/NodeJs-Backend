import { Router } from 'express';

import AlbumController from '../controllers/album.controller';

const albumsRouter = Router();

// get all albums
albumsRouter.get("/", async (req, res) => {
  try {
    const data = await AlbumController.findAll();
    res.json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// get album by id
albumsRouter.get("/:id", async (req, res) => {
  try {
    const { params } = req;
    const data = await AlbumController.finById(params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// post to create a new album
albumsRouter.post("/", async (req, res) => {
  try {
    const album = await AlbumController.create(req.body);
    res.status(200).json(album);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// put to update allbum
albumsRouter.put("/:id", async (req, res) => {
  const { params } = req;
  try {
    const album = await AlbumController.update(req.body, params.id);
    res.status(200).json(album);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// delete allbum
albumsRouter.delete("/:id", async (req, res) => {
  const { params } = req;
  try {
    await AlbumController.destroy(params.id);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ error });
  }
});

albumsRouter.post('/:id/artists/:artistId', async (req, res, next) => {
  try {
    await AlbumController.addArtist(req.params.id, req.params.artistId);
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

albumsRouter.delete('/:id/artists/:artistId', async (req, res) => {
  try {
    await AlbumController.removeArtist(req.params.id, req.params.artistId);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default albumsRouter;