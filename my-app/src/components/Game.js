import React, { useState, useEffect } from 'react';
import Board from './Board';

export default function Game() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(history[history.length]);
  }, [history]);

  const onPlay = (newMove) => {
    setHistory([...history, newMove]);
    setxIsNext(!xIsNext);
  };

  function Winner(squre) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squre[a] && squre[a] === squre[b] && squre[a] === squre[c]) {
        return squre[a];
      }
    }
    return null;
  }
  const status = Winner(newArr)
    ? ` 👑Winner is ${Winner(newArr)}`
    : xIsNext
    ? 'Next player is X'
    : 'Next player is O';

  const jumpTo = (i) => {
    if (i > 0) {
      setNewArr(history[i]);
    } else {
      setHistory([Array(9).fill(null)]);
    }
  };

  return (
    <>
      <h2>{status}</h2>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            onSqureClick={onPlay}
            history={newArr}
            Winner={Winner}
          />
        </div>
        <div className="game-info">
          <ol>
            {history.map((move, i) => {
              let description;
              if (i > 0) {
                description = `Go To Move #${i} `;
              } else {
                description = `Start Game`;
              }
              return <button onClick={() => jumpTo(i)}>{description}</button>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
