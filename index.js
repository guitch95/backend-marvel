import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import axios from 'axios';
import characterRoutes from './routes/characterRoutes.js';
import comicRoutes from './routes/comicRoutes.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  try {
    res.status(200).json({message: 'Bienvenue'});
  } catch (error) {
    res.status(500).json({message: error.message});
    // console.log(error.message);
  }
});

app.use(characterRoutes);
app.use(comicRoutes);

app.all(/.*/, (req, res) => {
  res.status(404).json({message: "This route doesn't exist."});
});

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
