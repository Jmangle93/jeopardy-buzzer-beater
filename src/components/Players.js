import Player from './Player';

function Players({players, numPlayers}) {
    return (
        <div className='row'>
            {players.slice(0, numPlayers).map((player, index) => {
                return  <div className='col-xs-10 col-sm-10 col-md-5 col-lg-5 col-sm-10 col-xs-10 p-4 mt-4' key={player}>
                            <Player player={player} index={index}></Player>
                        </div>
            })}
        </div>
    )
}

export default Players;