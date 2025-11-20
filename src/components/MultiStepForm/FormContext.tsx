import React, { createContext, useContext, useEffect, useState } from "react";

interface FormData {
  name: string;
  age: string;
  education: string;
  graduationYear: string;
  fatherName: string;
  motherName: string;
}

const defaultValues: FormData = {
  name: "",
  age: "",
  education: "",
  graduationYear: "",
  fatherName: "",
  motherName: "",
};

const STORAGE_KEY = "multi-step-form-data";

const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(() => {
    // Load data from localStorage when app loads
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultValues;
  });

  // Auto-save to localStorage whenever formData updates
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearForm = () => {
    setFormData(defaultValues);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <FormContext.Provider value={{ formData, updateField, clearForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
