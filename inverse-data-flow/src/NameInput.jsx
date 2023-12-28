import React from "react";

export default function NameInput({ value, handleChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => handleChange('name', e.target.value)}/> 
      <p>Name is: {value}</p>
    </div>
  );
}
