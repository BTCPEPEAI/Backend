const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const fetchCategoryData = async (category) => {
  const endpoints = {
    trending: "https://api.coingecko.com/api/v3/search/trending",
    gainers:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=10&page=1",
    new:
      "https://api.coingecko.com/api/v3/coins/list?include_platform=false",
    "low-volume":
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=10&page=1",
    trusted:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
    "hot-pairs": "https://api.coingecko.com/api/v3/search/trending", // same as trending
  };

  const url = endpoints[category];
  if (!url) throw new Error("Invalid category");

  const response = await axios.get(url);
  return response.data;
};

// ✅ THIS ROUTE HANDLES ALL CATEGORIES
app.get("/api/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const data = await fetchCategoryData(category);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data", details: err.message });
  }
});

// Simple homepage route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running! Try /api/trending");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
