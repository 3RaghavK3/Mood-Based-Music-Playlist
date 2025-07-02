import express from 'express';
import cors from 'cors';
import { fetchSongs } from './fetchPlaylist.js';

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
        let randomPlaylistUrl = result.data[Math.floor(Math.random() * result.data.length)];

        console.log(randomPlaylistUrl);

        fetch(randomPlaylistUrl.tracklist)
          .then((response) => response.json())
          .then((trackdata) => {
            res.json({
              tracksinfo: trackdata.data,
              playlistinfo: randomPlaylistUrl,
            });
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
