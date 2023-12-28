import React from "react";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ name: "recluzegeek", email: "recluzegeek@gmail.com" });
  const onChange = (fieldName, fieldValue) => {
    // setFormData({ ...formData, fieldName: fieldValue });
    setFormData({ ...formData, [fieldName]: fieldValue });
  };
  return (
    <div>
      <form action="">
        <NameInput value={formData.name} handleChange={onChange} />
        <EmailInput value={formData.email} handleChange={onChange} />
      </form>
    </div>
  );
}
