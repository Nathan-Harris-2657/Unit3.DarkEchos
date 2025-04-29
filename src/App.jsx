import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState()
  
  function availableEpisodes(){
    return(
      <div id="episodeContainer">
        <h1>Available Episodes</h1>
        <div id="Episodes">
          {episodes.map((episode) =>{
           return <li key={episode.name}></li>
          })}
        </div>
      </div>
    )
  }
  
  return(
    <>
    <header>
        <h1>Episodes</h1>
      </header>
      <main>
        <availableEpisodes />
      </main>
    </>
  )
};
