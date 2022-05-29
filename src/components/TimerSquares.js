import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function TimerSquares() {
  const squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const [counter, setCounter] = useState(0);
  const timerInterval = 1500;

  // https://reactgo.com/react-setinterval/
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 4) {
        setCounter(t => t+1);
        console.log(counter);
      }
    }, timerInterval);

    return () => clearInterval(timer);
  });

  return (
    <div align="center">
      {squares.map((_, i) => {
        let clr = (i+counter >= 8 || i-counter <= 0) ? "#aaa" : "#e34";
        return <a key={"sq"+i}><FontAwesomeIcon color={clr} icon={faSquare}></FontAwesomeIcon> </a>;
      })}
    </div>
  );
}

export default TimerSquares;
