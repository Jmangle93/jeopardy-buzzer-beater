import { useEffect, useState } from "react";

import Header from './Header';
import Players from './Players';


function App() {
  const keys =   ['y',
                    'u',
                    'i',
                    'o',
                    'p',
                    'h',
                    'j',
                    'k'];

    const [players, setPlayers] = useState(Array.from(Array(8), (p, i) => "player"+(i+1)));

    function handleBuzzIn(event) {
        keys.forEach(e => {
            if (event.key === e) {
                console.log('key press');
            }
        });
    };

    function handleUpdates(event) {

    }

    function handlePlayerName(event, index) {
        players[index] = event.target.value;
    }

    return (
        <div className="container players-list" onKeyDown={(e) => handleBuzzIn(e)}>
            <Header></Header>
            <br></br>
            <br></br>
            <Players players={players}></Players>
        </div>
    );
}

export default App;