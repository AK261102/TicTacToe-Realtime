// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Square from '../Square/Square';

const renderFrom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const App = () => {
  return (
    <div className="main-div">
      <div>
        <h1 className="game-heading water-background">Tic Tac Toe</h1>
        <div className="square-wrapper">
          {renderFrom.map((arr, rowIndex) =>
            arr.map((e, colIndex) => (
              <Square key={`${rowIndex}-${colIndex}`} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
