import { useState } from 'react';

function Player({player, index}) {

    const [playerValue, setPlayerValue] = useState(player);

    return (
        <div>
            <h5 align="center"><input type="text" onChange={(e, index) => setPlayerValue(e.target.value)} value={playerValue}></input></h5>
            <br></br>
            <h5 align="center"><i className='fas fa-lightbulb'> player # {index+1}</i></h5>
            <br></br>
        </div>
    );
}

export default Player;