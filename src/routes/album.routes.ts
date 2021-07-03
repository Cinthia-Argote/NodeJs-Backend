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
albumsRouter.put("/:id", async (req, res, next) => {
  const { params } = req;
  try {
    await AlbumController.update(req.body, params.id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

// delete allbum
albumsRouter.delete("/:id", async (req, res, next) => {
  const { params } = req;
  try {
    await AlbumController.destroy(params.id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default albumsRouter;