const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Define endpoints for each feature
app.get('/api/trending', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending coins' });
  }
});

app.get('/api/gainers', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'percent_change_24h_desc',
        per_page: 10,
        page: 1,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top gainers' });
  }
});

app.get('/api/trending', async (req, res) => {
    try {
      const response = await axios.get(' https://pro-api.coingecko.com/api/v3/coins/top_gainers_losers');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending coins' });
    }
  });

  app.get('/api/trending', async (req, res) => {
    try {
      const response = await axios.get('https://pro-api.coingecko.com/api/v3/coins/list/new');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending coins' });
    }
  });

  app.get('/api/trending', async (req, res) => {
    try {
      const response = await axios.get('https://pro-api.coingecko.com/api/v3/search');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending coins' });
    }
  });

  app.get('/api/trending', async (req, res) => {
    try {
      const response = await axios.get('https://pro-api.coingecko.com/api/v3/coins/id/circulating_supply_chart');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending coins' });
    }
  });
// Similarly, define endpoints for 'new', 'low-volume', 'trusted', and 'hot-pairs'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
