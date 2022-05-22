

function FirstPlayer({firstPlayer, popFirst}) {
  return firstPlayer ? (
    <div align="center">
      <h1>{firstPlayer}</h1>
      <button className="" type="button" onClick={() => popFirst()}>Time!</button>
    </div>
  ) : <div></div>;
}

export default FirstPlayer;