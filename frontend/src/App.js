import React, { useState } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('');
  const [songs, setSongs] = useState([]);

  // Handle mood change
  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  // Fetch songs based on the selected mood
  React.useEffect(() => {
    if (mood) {
      fetch(`/api/recommendation?mood=${mood}`)
        .then((response) => response.json())
        .then((data) => setSongs(data));
    }
  }, [mood]);

  return (
    <div className="App">
      <h1>Music Recommendation Based on Mood</h1>
      
      {/* Mood selection buttons */}
      <div>
        <button onClick={() => handleMoodChange('happy')}>Happy</button>
        <button onClick={() => handleMoodChange('sad')}>Sad</button>
        <button onClick={() => handleMoodChange('energetic')}>Energetic</button>
        <button onClick={() => handleMoodChange('relaxed')}>Relaxed</button>
      </div>
      
      {/* Display selected mood */}
      <div>
        <h2>Selected Mood: {mood}</h2>
      </div>
      
      {/* Display song recommendations */}
      <div>
        {songs.length > 0 ? (
          <ul>
            {songs.map((song) => (
              <li key={song.id}>
                {song.title} - <a href={song.link} target="_blank" rel="noopener noreferrer">Listen</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recommendations available</p>
        )}
      </div>
    </div>
  );
}

export default App;
