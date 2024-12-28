// eslint-disable-next-line no-unused-vars
import React from 'react';
import  { useState, useEffect } from "react";
import './App.css';
import Square from '../Square/Square';

const renderFrom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const App = () => {
  const [gameState, setGameState] = useState(renderFrom);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [finishedState, setFinishetState] = useState(false);
  return (
    <div className="main-div">
      <div>
      <div className='move-detection'>
      <div className='left'>YOURSELF</div>
      <div className='right'>OPPONENT</div>
      </div>
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
        <div className='square-wrapper'>
          {gameState.map((arr,rowIndex) =>
          arr.map((e,colIndex) => {
            return <Square 
            finishedState={finishedState}
            setFinishetState={setFinishetState}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setGameState={setGameState}  
            id={rowIndex * 3 + colIndex}
            key={rowIndex * 3 + colIndex}/>
          })
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
