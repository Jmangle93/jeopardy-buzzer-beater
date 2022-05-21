import {useEffect, useState} from 'react';

import Header from '../src/components/Header';
import Players from '../src/components/Players';


const IndexPage = () => {
    const keys =   ['y',
                    'u',
                    'i',
                    'o',
                    'p',
                    'h',
                    'j',
                    'k',
                    'l',
                    ';'];

    const [players, setPlayers] = useState(['Alice',
                                            'Bob',
                                            'Charles',
                                            'Dan',
                                            'Ed',
                                            'Fern',
                                            'Gloria',
                                            'Helen',
                                            'Ingrid',
                                            'Joe']);

    const [numPlayers, setNumPlayers] = useState(10);
    useEffect(() => {
        document.title = `There are ${numPlayers} players`;
    });


    function handleBuzzIn(event) {
        keys.forEach(e => {
            if (event.key === e) {
                console.log('key press');
                console.log(numPlayers);
            }
        });
    };

    function handleUpdates(event) {

    }

    function handlePlayerNumber(event) {
        numPlayers = event.target.value;
    }


    function handlePlayerName(event, index) {
        players[index] = event.target.value;
    }


    return (
        <div className="container players-list" onKeyDown={(e) => handleBuzzIn(e)}>
            <Header maxPlayers={keys.length} numPlayers={numPlayers} setNumPlayers={setNumPlayers}></Header>
            <br></br>
            <br></br>
            <Players players={players} numPlayers={numPlayers}></Players>
        </div>
    );
}



export default IndexPage;