import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function FirstPlayer({firstPlayer, popFirst}) {
  const squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const [counter, setCounter] = useState(-1);
  const timerInterval = 1500;

  // https://reactgo.com/react-setinterval/
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 4 && firstPlayer) {
        setCounter(t => t+1);
        console.log(counter);
      }
    }, timerInterval);

    return () => clearInterval(timer);
  });

  return firstPlayer ? (
    <div align="center">
      <h1>{firstPlayer}</h1>
      <div>
        {squares.map((_, i) => {
          let clr = (i+counter >= 8 || i-counter <= 0) ? "#aaa" : "#e34";
          return <a key={"sq"+i}><FontAwesomeIcon color={clr} icon={faSquare}></FontAwesomeIcon> </a>;
        })}
      </div>
      <button className="mt-4" type="button" onClick={() => {popFirst(); setCounter(-1)}}>Time!</button>
    </div>
  ) : <div></div>;
}

export default FirstPlayer;