import React, { useState } from 'react';
import hogs from '../porkers_data';
import HogTile from './HogTile';

const App = () => {
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);

  const toggleGreasedFilter = () => {
    setShowGreased(!showGreased);
    if (showGreased) {
      setFilteredHogs(hogs);
    } else {
      setFilteredHogs(hogs.filter(hog => hog.greased));
    }
  };

  return (
    <div className="App">
      <button onClick={toggleGreasedFilter}>
        {showGreased ? 'Show All Hogs' : 'Show Only Greased Hogs'}
      </button>
      <div className="hog-tiles">
        {filteredHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
};

export default App;
