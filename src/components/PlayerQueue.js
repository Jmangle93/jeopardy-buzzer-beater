

function PlayerQueue({playerQueue}) {

  return (
    <div>
      {playerQueue.map(player => {
        return (
        <div align="center">
          <label>{player}</label>
        </div>
      )})}
    </div>
  );

}

export default PlayerQueue;