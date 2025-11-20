import React from "react";
import { useFormData } from "./FormContext";

const Step2 = () => {
  const { formData, updateField } = useFormData();
  return (
    <div>
      <h2>Education Details</h2>

      <label>Qualification</label>
      <input
        value={formData.education}
        onChange={(e) => updateField("education", e.target.value)}
        placeholder="Enter highest qualification"
      />

      <label>Graduation Year</label>
      <input
        value={formData.graduationYear}
        onChange={(e) => updateField("graduationYear", e.target.value)}
        placeholder="Enter graduation year"
      />
    </div>
  );
};

export default Step2;
