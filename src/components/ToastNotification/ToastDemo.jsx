// ToastDemo.jsx
import React from "react";
import { useToast } from "./ToastContext";

const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <button onClick={() => showToast("success", "Success Operation!")}>
        Success
      </button>

      <button onClick={() => showToast("warn", "Warning Occurred!")}>
        Warning
      </button>

      <button onClick={() => showToast("error", "Error Happened!")}>
        Error
      </button>
    </div>
  );
};

export default ToastDemo;
