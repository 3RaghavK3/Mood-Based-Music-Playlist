# Mood-Based Music Playlist

A simple mood-based music player that fetches and plays songs according to your current mood. Select from five predefined moods and enjoy a curated playlist that matches your vibe.

## Live Demo
https://mood-based-music-playlist.vercel.app


> ⚠️ **Note:** This project was done with Vanilla CSS and it is not responsive(except Homepage).The project will be converted into Tailwind CSS and made responsive in the future updates.

## Features

- Five predefined mood categories
- Dynamic song fetching based on selected mood
- Random playlist selection for variety
- Simple and intuitive user interface
- Real-time music playback
- Fully responsive design

## Tech Stack

**Client:** React, Vanilla CSS

**Server:** Node.js, Express.js

**API:** Deezer API

## Installation

```bash
git clone https://github.com/3RaghavK3/Mood-Based-Music-Playlist
cd Mood-Based-Music-Playlist

# Install client
cd client
npm install

# Install server
cd server
npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


Client(`client/.env`)
```
VITE_API_URL=your_backend_api_url
```

Server (`server/.env`)
```
PORT=3000
```

## Run Locally

```bash
# Start backend
cd server
npm start

# Start frontend (in a separate terminal)
cd client
npm run dev
```

## Project Structure

```
MOOD-BASED-MUSIC-PLAYLIST/
│
├── client/
│   ├── node_modules/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .prettierrc
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/
│   ├── node_modules/
│   ├── fetchPlaylist.js
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
├── .gitignore
└── README.md
```

## API Reference

#### Get Songs by Mood

```http
GET /songs/:mood
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `mood`    | `string` | **Required**. Mood type (e.g., happy, sad, chill) |

Returns a random playlist with tracks matching the specified mood.

---

#### Health Check

```http
GET /health
```

Returns server status.

## Screenshots

**HomePage(Happy)**  
![HomePage(Happy)](https://github.com/user-attachments/assets/b0a64081-714e-45cb-bd7e-a266a18c201b)

**HomePage(Sad)**  
![HomePage(Sad)](https://github.com/user-attachments/assets/ab16d718-8a9c-443b-975d-9a62176805ac)

**Songs**  
![Songs](https://github.com/user-attachments/assets/a93fa5db-ca76-4b6d-ac49-7061ce7fdc98)

**Liked**  
![Liked](https://github.com/user-attachments/assets/fad8a6e7-5531-4849-995a-355b5eedab73)


## Future Improvements / Known Issues

- Make it responsive after converting it to tailwind CSS .
- Add more mood categories
- Implement queue management