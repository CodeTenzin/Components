import React, { ChangeEvent, useState } from "react";

const dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["", "Option 1", "Option 2", "Option 3"];

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option</label>
      <select id="dropdown" onChange={handleSelect} value={selectedOption}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected {selectedOption}</p>}
    </div>
  );
};

export default dropdown;
