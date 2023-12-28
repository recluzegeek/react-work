import React from "react";

export default function EmailInput({ value, handleChange }) {
  return (
    <div>
      <input type="email" value={value} onChange={(e) => handleChange('email', e.target.value)}/> 
      <p>Email is: {value}</p>
    </div>
  );
}
