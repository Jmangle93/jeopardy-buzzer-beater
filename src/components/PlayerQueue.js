

function PlayerQueue({playerQueue}) {

  return (
    <div>
      {playerQueue.map((player, i) => {
        return (
        <div align="center" key={"player-"+player+i}>
          <label>{player}</label>
        </div>
      )})}
    </div>
  );

}

export default PlayerQueue;