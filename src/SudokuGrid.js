import React, { useState } from 'react';
import axios from 'axios';
const url =process.env.REACT_APP_URL

function SudokuGrid() {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill(0)));

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value === '' ? 0 : parseInt(value, 10);
    setGrid(newGrid);
  };

  const handleSolve = async () => {
    try {
      const response = await axios.post(url+'/api/solve', { puzzle: grid });
      setGrid(response.data.solution);
    } catch (error) {
      console.error('Error solving Sudoku:', error);
    }
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              min="1"
              max="9"
              value={cell || ''}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
              className="sudoku-cell"
            />
          ))}
        </div>
      ))}
      <button onClick={handleSolve}>Solve</button>
    </div>
  );
}

export default SudokuGrid;