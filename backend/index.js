const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Mock data for music recommendations
const musicData = {
  happy: [
    { id: 1, title: 'Happy Song', link: 'https://youtube.com/xyz' },
    { id: 2, title: 'Joyful Tune', link: 'https://youtube.com/abc' },
  ],
  sad: [
    { id: 1, title: 'Sad Song', link: 'https://youtube.com/sad1' },
    { id: 2, title: 'Tearful Melody', link: 'https://youtube.com/sad2' },
  ],
  energetic: [
    { id: 1, title: 'Energetic Beat', link: 'https://youtube.com/energetic1' },
    { id: 2, title: 'Powerful Rhythm', link: 'https://youtube.com/energetic2' },
  ],
  relaxed: [
    { id: 1, title: 'Chill Vibes', link: 'https://youtube.com/relaxed1' },
    { id: 2, title: 'Peaceful Melody', link: 'https://youtube.com/relaxed2' },
  ],
};

// API endpoint to get recommendations
app.get('/api/recommendation', (req, res) => {
  const mood = req.query.mood;
  if (musicData[mood]) {
    res.json(musicData[mood]);
  } else {
    res.json([]);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
