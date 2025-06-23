import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegularMode.css";

export default function RegularMode() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("easy");
  const [currentDifficulty, setCurrentDifficulty] = useState("easy");
  const [tiles, setTiles] = useState([]);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const generateTiles = (count) => {
    const tilePairs = Array.from({ length: count / 2 }, (_, i) => i + 1);
    const shuffled = [...tilePairs, ...tilePairs]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, flipped: false, matched: false }));
    setTiles(shuffled);
    setFlippedTiles([]);
    setHasWon(false);
  };

  const handleStart = () => {
    const count = difficulty === "easy" ? 8 : difficulty === "medium" ? 16 : 24;
    setCurrentDifficulty(difficulty);
    generateTiles(count);
  };

  const handleFlip = (id) => {
    const clickedTile = tiles.find((tile) => tile.id === id);
    if (clickedTile.flipped || clickedTile.matched || flippedTiles.length === 2) return;

    const newTiles = tiles.map((tile) =>
      tile.id === id ? { ...tile, flipped: true } : tile
    );
    const newFlipped = [...flippedTiles, clickedTile];

    setTiles(newTiles);
    setFlippedTiles(newFlipped);
  };

  useEffect(() => {
    if (flippedTiles.length === 2) {
      const [first, second] = flippedTiles;
      if (first.value === second.value) {
        setTiles((prev) =>
          prev.map((tile) =>
            tile.value === first.value ? { ...tile, matched: true } : tile
          )
        );
        setFlippedTiles([]);
      } else {
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((tile) =>
              tile.id === first.id || tile.id === second.id
                ? { ...tile, flipped: false }
                : tile
            )
          );
          setFlippedTiles([]);
        }, 1000);
      }
    }
  }, [flippedTiles]);

  useEffect(() => {
    if (tiles.length > 0 && tiles.every((tile) => tile.matched)) {
      setHasWon(true);
    }
  }, [tiles]);

  return (
    <div
      className="bg-container"
      style={{ backgroundImage: `url(/bg.jpg)` }}
    >
      <div className="overlay">
        <h1 className="title">Regular Mode</h1>

        <div className="control-panel">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy (4x2)</option>
            <option value="medium">Medium (4x4)</option>
            <option value="hard">Hard (6x4)</option>
          </select>
          <button onClick={handleStart}>Start New Round</button>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>

        {hasWon && <p className="win-message">🎉 You Win! 🎉</p>}

        <div className={`tile-board ${currentDifficulty}`}>
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="tile"
              onClick={() => handleFlip(tile.id)}
            >
              <img
                src={tile.flipped || tile.matched ? `/tiles/tile${tile.value}.png` : "/tiles/back.png"}
                alt={`Tile ${tile.value}`}
                className="tile-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
