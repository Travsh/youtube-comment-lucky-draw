import React from 'react';

const DrawButton = ({ onDraw, winner }) => {
  return (
    <div>
      <button onClick={onDraw}>Draw</button>
      {winner && (
        <p>
          Winner: <a href={`https://www.youtube.com/${winner}`} target="_blank" rel="noopener noreferrer">{winner}</a>
        </p>
      )}
    </div>
  );
};

export default DrawButton;
