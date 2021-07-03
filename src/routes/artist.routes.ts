import { Router } from 'express';

import ArtistModel from '../models/artist.model';
import ArtistController from '../controllers/artist.controller';

const artistsRouter = Router();

// get all artists
artistsRouter.get("/", async (req, res, next) => {
  try {
    const data = await ArtistController.findAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

// post to create a new artist
artistsRouter.post("/", async (req, res, next) => {
  try {
    const artist = await ArtistController.create(req.body);
    res.status(201).json(artist);
  } catch (e) {
    next(e);
  }
});

// put to update artist
artistsRouter.put("/:id", async (req, res, next) => {
  const { params } = req;
  try {
    await ArtistController.update(req.body, params.id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

// delete artist
artistsRouter.delete("/:id", async (req, res, next) => {
  const { params } = req;
  try {
    await ArtistController.destroy(params.id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default artistsRouter;