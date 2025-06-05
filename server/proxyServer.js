import express from 'express';
import cors from 'cors';
import { fetchSongs } from '../src/api/fetchPlaylist.js';

const port = 3000;
const app = express();

app.use(cors());

app.get('/songs/:mood', (req, res) => {
  let mood = req.params.mood;

  fetchSongs(mood)
    .then((result) => {
      if (!result.data || result.data.length === 0) {
        return res.status(404).json({
          error: 'Not found',
          message: 'No playlists found',
        });
      } else {
        let randomPlaylistUrl =
          result.data[Math.floor(Math.random() * result.data.length)].tracklist;

        fetch(randomPlaylistUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            res.json(data);
          })
          .catch((error) => {
            console.log(error);
            return res.status(500).json({
              error: 'Not found',
              message: 'Failed to fetch videos from playlist',
            });
          });
      }
    })
    .catch((e) => {
      console.log(e);
      return res.status(500).json({
        error: 'Not found',
        message: 'Error fetching songs',
      });
    });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
