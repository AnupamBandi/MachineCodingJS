import React from "react";
import { useFormData } from "./FormContext";

const StepOne = () => {
  const { formData, updateField } = useFormData();
  return (
    <div>
      <h2>Personal Info</h2>

      <label>Name</label>
      <input
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
        placeholder="Enter name"
      />

      <label>Age</label>
      <input
        type="number"
        value={formData.age}
        onChange={(e) => updateField("age", e.target.value)}
        placeholder="Enter age"
      />
    </div>
  );
};

export default StepOne;
