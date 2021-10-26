import React, { useState } from "react";
import Square from 'components/Square';
import Restart from 'components/RestartButton';
import calculateWinner from 'helpers/CalculateWinner';
import isBoardFull from 'helpers/IsBoardFull';

export default function Game() {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);
    const nextSymbol = isXNext ? "X" : "O";
    const winner = calculateWinner(squares);
  
    function getStatus() {
      if (winner) {
        return "Winner: " + winner;
      } else if (isBoardFull(squares)) {
        return "Draw!";
      } else {
        return "Next player: " + nextSymbol;
      }
    }
  
    function renderSquare(i:any) {
      return (
        <Square
          value={squares[i]}
          onClick={() => {
            if (squares[i] != null || winner != null) {
              return;
            }
            const nextSquares = squares.slice();
            nextSquares[i] = nextSymbol;
            setSquares(nextSquares);
  
            setIsXNext(!isXNext); // toggle turns
          }}
        />
      );
    }
  
    function renderRestartButton() {
      return (
        <Restart
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
          }}
        />
      );
    }
  
    return (
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
          <div className="game-info">{getStatus()}</div>
          <div className="restart-button">{renderRestartButton()}</div>
        </div>
      </div>
    );
  }