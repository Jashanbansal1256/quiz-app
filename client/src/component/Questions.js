import React, { useState } from "react";

export const Questions = () => {
  const [check, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio button clicked");
  }
  return (
    <div className="questions">
      <h2 className="text-light">Sample Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={()=>onSelect()}
          />
          <label className="text-primary" htmlFor="q1-option">
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
};