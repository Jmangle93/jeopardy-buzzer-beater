import { useEffect, useState } from "react";

import FirstPlayer from "./FirstPlayer";
import Header from './Header';
import Players from './Players';
import PlayerQueue from "./PlayerQueue";


function App() {
  const keys =   ['y',
                  'u',
                  'i',
                  'o',
                  'p',
                  'h',
                  'j',
                  'k'];

  const [buzzQueue, setBuzzQueue] = useState([]);

  const [players, setPlayers] = useState(Array.from(Array(8), (_, i) => "player" + (i+1)));

  function handleBuzzIn(event) {
    if (keys.indexOf(event.key) != -1) {
      addPlayerToQueue(event.key);
    }
  }

  function addPlayerToQueue(playerKey) {
    console.log(playerKey);
    if (playerKey && buzzQueue.indexOf(playerKey) == -1) {
      setBuzzQueue(bQ => [...bQ, playerKey]);
    }
  }

  function clearBuzzins() {
    setBuzzQueue([]);
  }

  function popFirst() {
    setBuzzQueue(bQ => bQ.slice(1));
  }

  return (
    <div container="container app">
      <div className="container header" onKeyDown={(e) => handleBuzzIn(e)}>
        <Header clearBuzzins={clearBuzzins}></Header>
      </div>
      <br></br>
      <FirstPlayer firstPlayer={players[keys.indexOf(buzzQueue[0])]} popFirst={popFirst}></FirstPlayer>
      <br></br>
      <PlayerQueue playerQueue={buzzQueue.slice(1).map(key => players[keys.indexOf(key)])}></PlayerQueue>
      <br></br>
      <Players players={players} setPlayers={setPlayers}></Players>
    </div>
  );
}

export default App;