import { Router } from 'express';

import ArtistController from '../controllers/artist.controller';

const artistsRouter = Router();

// get all artists
artistsRouter.get("/", async (req, res) => {
  try {
    const data = await ArtistController.findAll();
    res.json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// get album
artistsRouter.get("/:id", async (req, res) => {
  try {
    const { params } = req;
    const data = await ArtistController.finById(params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// post to create a new artist
artistsRouter.post("/", async (req, res) => {
  try {
    const artist = await ArtistController.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// put to update artist
artistsRouter.put("/:id", async (req, res) => {
  const { params } = req;
  try {
    await ArtistController.update(req.body, params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// delete artist
artistsRouter.delete("/:id", async (req, res) => {
  const { params } = req;
  try {
    await ArtistController.destroy(params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default artistsRouter;