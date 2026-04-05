const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const extractRoutes = require('./routes/extractRoutes');

dotenv.config();

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://benefit-analyzer.vercel.app/'
    ],
    credentials: true
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/extract', extractRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Closing Disclosure Benefit Summary API Running'
  });
});

module.exports = app;
