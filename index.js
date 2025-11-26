import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
  try {
    res.status(200).json({message: 'Bienvenue'});
  } catch (error) {
    res.status(500).json({message: error.message});
    // console.log(error.message);
  }
});

app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}`
    );

    res.status(200).json({message: response.data});
  } catch (error) {
    res.status(500).json({message: error.message});

    // console.log(error.message);
  }
});

app.get('/character/:characterId', async (req, res) => {
  const {characterId} = req.params;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${API_KEY}`
    );
    console.log(response.data);
    res.status(200).json({message: response.data});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get('/comics', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}`
    );
    // console.log(response.data);
    res.status(200).json({message: response.data});
  } catch (error) {
    res.status(500).json({message: error.message});

    // console.log(error.message);
  }
});

app.get('/comics/:characterId', async (req, res) => {
  const {characterId} = req.params;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${API_KEY}`
    );
    console.log(response.data);
    res.status(200).json({message: response.data});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get('/comic/:comicId', async (req, res) => {
  // comic/comic
  const {comicId} = req.params;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${API_KEY}`
    );
    console.log(response.data);
    res.status(200).json({message: response.data});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.listen(3000, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
