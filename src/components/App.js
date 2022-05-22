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

    // How to ensure the first pressed occurs first? Need async here
    function handleBuzzIn(event) {
        keys.forEach((e, i) => {
            if (event.key === e) {
                console.log('key press: ' + ( i + 1));
            }
        });
    }

    return (
        <div className="container players-list" onKeyDown={(e) => handleBuzzIn(e)}>
            <Header></Header>
            <br></br>
            <br></br>
            <Players players={players} setPlayers={setPlayers}></Players>
        </div>
    );
}

export default App;