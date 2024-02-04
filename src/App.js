import React, { useState } from "react";
import Header from "./Header";
import MainCollumn from "./Collumns";
import "./App.css";

const App = () => {
  const [columns, setColumns] = useState([<MainCollumn key={1} />]);

  const handleAddColumn = () => {
    const newColumnKey = columns.length + 1;
    const newColumns = [...columns, <MainCollumn key={newColumnKey} />];
    setColumns(newColumns);
  };

  const handleRemoveColumn = (index) => {
    if (columns.length > 1) {
      const newColumns = [...columns];
      newColumns.splice(index, 1);
      setColumns(newColumns);
    }
  };

  return (
    <div>
      <Header />
     
    <h2 className="collumnNames">Brackets</h2>
      
      <div className="columns">
        {columns.map((column, index) => (
          <div key={index} className="column">
            {column}
            {columns.length > 1 && (
              <button onClick={() => handleRemoveColumn(index)}>
                Remove Column
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default App;
