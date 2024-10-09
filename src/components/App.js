import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortType, setSortType] = useState("");

  // Handle filtering greased hogs
  const handleFilter = () => {
    setFilterGreased(!filterGreased);
  };

  // Handle sorting hogs by name or weight
  const handleSort = (e) => {
    const type = e.target.value;
    setSortType(type);

    let sortedHogs = [...hogData];
    if (type === "name") {
      sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "weight") {
      sortedHogs.sort((a, b) => a.weight - b.weight);
    }

    setHogData(sortedHogs);
  };

  // Filter hogs based on whether they are greased
  const displayedHogs = filterGreased
    ? hogData.filter((hog) => hog.greased)
    : hogData;

  return (
    <div className="App">
      <Nav />

      {/* Filter Button */}
      <button onClick={handleFilter}>
        {filterGreased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>

      {/* Sorting Dropdown */}
      <div>
        <label>Sort by: </label>
        <select onChange={handleSort} value={sortType}>
          <option value="">Select</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      {/* Display hog tiles */}
      <div className="hog-container">
        {displayedHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
