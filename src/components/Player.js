import { useState } from 'react';

function Player({index}) {

  const [player, setPlayer] = useState("player"+(index+1));

  return (
    <div>
      <h5 align="center"><input type="text" onChange={(e) => setPlayer(e.target.value)} value={player}></input></h5>
      <br></br>
      <h5 align="center"><i className='fas fa-lightbulb'> player # {index+1}</i></h5>
      <br></br>
    </div>
  );
}

export default Player;