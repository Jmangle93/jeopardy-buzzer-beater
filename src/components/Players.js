
import Player from './Player';

function Players({players, setPlayers}) {

  function setPlayerName(playerName, index) {
    players.map((player, i) => {
      players[i] = index === i ? playerName : player;
    });
    setPlayers(players);
  }

  return (
    <div className='row'>
      {players.map((player, index) => {
        return  <div className='col-xs-10 col-sm-10 col-md-5 col-lg-5 col-sm-10 col-xs-10 p-4 mt-4' key={player}>
                  <Player playerName={player} setPlayerName={setPlayerName} index={index}></Player>
                </div>
      })}
    </div>
  );
}

export default Players;