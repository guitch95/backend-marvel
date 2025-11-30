import express from 'express';
import {Router} from 'express';
import axios from 'axios';
import cors from 'cors';

const router = Router();

router.get('/comics', async (req, res) => {
  try {
    const name = req.query.name || '';
    const skip = req.query.skip || 0;
    const limit = req.query.limit || 100;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}&title=${name}&skip=${skip}&limit=${limit}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({message: error.message});

    // console.log(error.message);
  }
});

router.get('/comics/:characterId', async (req, res) => {
  const {characterId} = req.params;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${API_KEY}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.get('/comic/:comicId', async (req, res) => {
  // comic/comic
  const {comicId} = req.params;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${API_KEY}`
    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});
