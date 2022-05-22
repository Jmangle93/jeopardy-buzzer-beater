
import Player from './Player';

function Players({numPlayers}) {

  return (
    <div className='row'>
      {Array(numPlayers).map((_, index) => {
        return  <div className='col-xs-10 col-sm-10 col-md-5 col-lg-5 col-sm-10 col-xs-10 p-4 mt-4' key={"player"+(index+1)}>
                  <Player index={index}></Player>
                </div>
      })}
    </div>
  );
}

export default Players;