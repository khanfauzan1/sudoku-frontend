import React from 'react';
import SudokuGrid from './SudokuGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuGrid />
    </div>
  );
}

export default App;