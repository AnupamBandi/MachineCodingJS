import React, { useState } from "react";

const p1 = "X";
const p2 = "O";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [playerTurn, setPlayerTurn] = useState(p1);
  const [tiles, setTiles] = useState(initialBoard);
  const [winner, setWinner] = useState(null);

  const handleTileClick = (index) => {
    // If the clicked tile is already occupied, do nothing
    if (tiles[index] || winner) return;

    // Update the tile at the clicked index with the current player's mark
    const newTiles = tiles.slice();

    newTiles[index] = playerTurn;
    setTiles(newTiles);
    checkWinner(newTiles);
    setPlayerTurn((prev) => (prev === p1 ? p2 : p1));
  };

  const checkWinner = (tiles) => {
    for (let seq of winSequence) {
      let [a, b, c] = seq;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setWinner(tiles[a]);
      }
    }
  };

  const onResetGame = () =>{
    setWinner(null)
    setTiles(initialBoard)
    setPlayerTurn(p1)
  }

const winSequence = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

  return (
    <div>
      {winner && <h2>Winner: {winner}</h2>} {/* Display winner */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Create 3 columns for the grid
          gridTemplateRows: "repeat(3, 1fr)", // Create 3 rows for the grid
          height: "600px",
          width: "600px",
          alignItems: "center",
        }}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            style={{
              background: "gray",
              color: "white",
              height: "60px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              border: "1px solid black",
            }}
            onClick={() => handleTileClick(index)}
          >
            {tile}
          </div>
        ))}
      </div>
      {winner && (
        <div>

          <button onClick={onResetGame}>Reset</button>
        </div>
      )

      }
    </div>
  );
};

export default TicTacToe;
