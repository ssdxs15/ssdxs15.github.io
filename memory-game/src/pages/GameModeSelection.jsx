import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameModeSelection.css";

export default function GameModeSelection() {
  const navigate = useNavigate();
  const bg = "/bg.jpg";

  return (
    <div
      className="bg-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1 className="title">Memory Game</h1>

        <div className="card-container">
          {/* Regular Mode */}
          <div className="card">
            <h2>Regular Mode</h2>
            <p>Play the game without a time limit. Relax and match at your own pace!</p>
            <button className="blue" onClick={() => navigate("/regular")}>
              Play Regular Mode
            </button>
          </div>

          {/* Timed Mode */}
          <div className="card">
            <h2>Timed Mode</h2>
            <p>Challenge yourself! Complete the game before time runs out.</p>
            <button className="red" onClick={() => navigate("/timed")}>
              Play Timed Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
