import { useFormData } from "./FormContext";

const Step3 = () => {
  const { formData, updateField } = useFormData();

  return (
    <div>
      <h2>Family Background</h2>

      <label>Father's Name</label>
      <input
        value={formData.fatherName}
        onChange={(e) => updateField("fatherName", e.target.value)}
        placeholder="Enter father's name"
      />

      <label>Mother's Name</label>
      <input
        value={formData.motherName}
        onChange={(e) => updateField("motherName", e.target.value)}
        placeholder="Enter mother's name"
      />
    </div>
  );
};

export default Step3;
