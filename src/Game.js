import React, { useState,useEffect } from 'react';
import './Game.css';

function Game() {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handlePlayer1Change = (event) => {
    setPlayer1(event.target.value);
  }

  const handlePlayer2Change = (event) => {
    setPlayer2(event.target.value);
  }

  const handleCellClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    const isBoardFull = board.every(cell => cell !== null);
    if (isBoardFull) {
      setWinner('tie');
    }
  }

  useEffect(() => {
    checkWinner();
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }

  return (
    <div className="Game">
      <div className="input-group">
        <label htmlFor="player1">Player 1 :</label>
        <input type="text" id="player1" value={player1} onChange={handlePlayer1Change} />
      </div>
      <div className="input-group">
        <label htmlFor="player2">Player 2 :</label>
        <input type="text" id="player2" value={player2} onChange={handlePlayer2Change} />
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className="winner-message">
          {winner === 'tie' ? (
            <p style={{color:"red"}}>It's a tie!🥱</p>
          ) : (
            <p>{winner === 'X' ? player1.toUpperCase() : player2.toUpperCase()} <span style={{color:"green"}}>wins!🥳</span></p>
          )}
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
