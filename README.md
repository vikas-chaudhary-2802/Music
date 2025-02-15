# Music Recommendation Based on Mood

This project is a demo of a music recommendation platform that suggests songs based on the user's selected mood. The application is built using *React* for the frontend and *Node.js + Express* for the backend.

## Features

- *Mood Selection*: Users can select a mood (Happy, Sad, Energetic, Relaxed) from a set of buttons.
- *Song Recommendations*: Based on the selected mood, the app fetches and displays a list of recommended songs.
- *Music Links*: Each song has a link to a music platform (e.g., YouTube) where users can listen to the track.

## Tech Stack

- *Frontend*: React
- *Backend*: Node.js, Express
- *Styling*: CSS (simple styling)

## Setup Instructions

### 1. Clone the repository

First, clone this repository to your local machine.

```bash
git clone https://github.com/your-username/music-mood-recommendation.git
cd music-mood-recommendation

## frontend setup(react)
cd frontend
npm install

###start the react app
npm start

## backend setup server

cd backend
npm install

### start backend server
node index.js

## How It Works
- Frontend (React)

-Mood Selection: The user selects a mood (Happy, Sad, Energetic, Relaxed) via buttons.

-Fetch Recommendations: The frontend fetches the list of recommended songs based on the mood from the backend.

-Display Recommendations: Songs are displayed with clickable links to listen to them (e.g., YouTube).

##  Backend (Node.js)

-The backend serves an API endpoint at /api/recommendation, which returns an array of songs based on the selected mood.

-The backend is using mock data for this demo, with predefined songs associated with each mood.


 ## Example of Song Data (Mock Data)

[
  {
    "id": 1,
    "title": "Happy Song",
    "link": "https://youtube.com/xyz"
  },
  {
    "id": 2,
    "title": "Joyful Tune",
    "link": "https://youtube.com/abc"
  }
]


## file Structure

mood-music-demo/
├── backend/                 # Backend (Node.js + Express)
│   └── index.js             # Main server file
├── frontend/                # Frontend (React)
│   └── src/
│       └── App.js           # Main React component
│       └── App.css          # Styling for the app
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation (this file)
thank you
