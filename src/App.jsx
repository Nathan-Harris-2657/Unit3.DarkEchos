import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null); // Initialize with `null`

  function AvailableEpisodes() {
    return (
      <div id="episodeContainer">
        <h1>Available Episodes</h1>
        <ul id="Episodes">
          {episodes.map((episode) => (
            <li 
              key={episode.id} 
              onClick={() => setSelectedEpisode(episode)} // Handle click
              style={{ cursor: "pointer" }} // Optional: Add visual feedback
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function SelectedEpisode() {
    return (
      <div id="selectedEpisode">
        {selectedEpisode ? ( // Render only if an episode is selected
          <>
            <h2>Selected Episode:</h2>
            <h3>This is Episode {selectedEpisode.id}</h3>
            <p>{selectedEpisode.title}</p>
            <p>{selectedEpisode.description}</p>
          </>
        ) : (
          <p>No episode selected. Click an episode to view details!</p>
        )}
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>Episodes</h1>
      </header>
      <main>
        <AvailableEpisodes />
        <SelectedEpisode />
      </main>
    </>
  );
}


