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
      <div className='move-detection'>
      <div className='left'>YOURSELF</div>
      <div className='right'>OPPONENT</div>
      </div>
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
        <div className='square-wrapper'>
          {renderFrom.map((arr) =>
            arr.map((e) => <Square key={e} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
