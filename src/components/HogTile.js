import React, { useState } from 'react';

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="hog-tile" onClick={handleClick}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div className="hog-details">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
};

export default HogTile;
