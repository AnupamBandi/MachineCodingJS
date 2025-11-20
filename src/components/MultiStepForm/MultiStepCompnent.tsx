import React, { useState } from "react";
import StepOne from "./StepOne";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useFormData } from "./FormContext";

const MultiStepCompnent = () => {
  const [step, setStep] = useState(0);
  const { formData, clearForm } = useFormData();

  const steps = [<StepOne />, <Step2 />, <Step3 />];
  const titles = ["Personal Info", "Education", "Family Background"];

  const validateStep = () => {
    if (step === 0) {
      if (!formData.name || !formData.age) return false;
    }
    if (step === 1) {
      if (!formData.education || !formData.graduationYear) return false;
    }
    if (step === 2) {
      if (!formData.fatherName || !formData.motherName) return false;
    }
    return true;
  };
  const nextStep = () => {
    if (!validateStep()) {
      alert("Please fill all required fields");
      return;
    }
    setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = () => {
    alert("Form Submitted Successfully!");
    console.log("Final Data:", formData);
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      {/* Progress Bar */}
      <div style={{ display: "flex", marginBottom: 20 }}>
        {titles.map((_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: 6,
              marginRight: index < titles.length - 1 ? 4 : 0,
              background: index <= step ? "#4caf50" : "#ccc",
              transition: "0.3s",
            }}
          />
        ))}
      </div>

      {/* Step Content */}
      {steps[step]}

      {/* Navigation Buttons */}
      <div style={{ marginTop: 20 }}>
        <button onClick={clearForm}>Clear Form</button>
        <button disabled={step === 0} onClick={prevStep}>
          Back
        </button>

        {step === steps.length - 1 ? (
          <button onClick={submitForm}>Submit</button>
        ) : (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepCompnent;
