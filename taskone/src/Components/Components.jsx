import React, { useState } from "react";
import { Resizable } from "react-resizable";
import axios from "axios";

const ResizableComponent = ({ componentName, defaultData }) => {
  const [data, setData] = useState(defaultData);
  const [inputValue, setInputValue] = useState(""); // State to store input value

  const handleAddOrUpdateData = async () => {
    try {
      const postData = {};
      postData[componentName] = inputValue; // Assign input value to postData
      await axios.post("http://localhost:5000/api/data/add", postData);
      console.log(postData);
    } catch (error) {
      console.error(
        `Error adding or updating data for ${componentName}:`,
        error
      );
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update inputValue state with input value
  };

  return (
    <Resizable
      className={`component ${componentName}`}
      width={data.width}
      height={data.height}
      onResize={(e, { size }) => setData(size)}
    >
      <div>
        <div>{componentName}</div>
        <div>
          <label>Data:</label>
          <input
            type="number"
            value={inputValue} // Use inputValue state for input value
            onChange={handleInputChange} // Call handleInputChange on change
          />
        </div>
        <div>
          <button onClick={handleAddOrUpdateData}>Add/Update Data</button>
        </div>
      </div>
    </Resizable>
  );
};

const ComponentA = () => {
  return (
    <ResizableComponent
      componentName="componentA"
      defaultData={{ width: 1000, height: 500 }}
    />
  );
};

const ComponentB = () => {
  return (
    <ResizableComponent
      componentName="componentB"
      defaultData={{ width: 200, height: 200 }}
    />
  );
};

const ComponentC = () => {
  return (
    <ResizableComponent
      componentName="componentC"
      defaultData={{ width: 200, height: 200 }}
    />
  );
};

export { ComponentA, ComponentB, ComponentC };
