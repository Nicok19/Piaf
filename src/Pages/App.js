
import React, { useState } from "react";
import Header from "../Components/Header";
import MainCollumn from "../Components/Collumns";
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
      
      
      <div className="collumns">
        {columns.map((column, index) => (
          <div key={index} className="collumn">
            {column}
            {columns.length > 1 && (
              <button className="removeCollumn" onClick={() => handleRemoveColumn(index)}>
                Delete Column
              </button>
            )}
          </div>
        ))}
      </div>


      <div className="newCollumn">
      <button className ="newCollumnButton" onClick={handleAddColumn}>+</button>
      </div>


     
    </div>
  );
};

export default App;
