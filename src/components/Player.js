import { useState } from 'react';

function Player({playerName, setPlayerName, index}) {

  const [player, setPlayer] = useState(playerName);

  return (
    <div>
      <h5 align="center"><input type="text" onChange={(e) => {setPlayerName(e.target.value, index); setPlayer(e.target.value)}} value={player}></input></h5>
      <br></br>
      <h5 align="center"><i className='fas fa-lightbulb'> player # {index+1}</i></h5>
      <br></br>
    </div>
  );
}

export default Player;