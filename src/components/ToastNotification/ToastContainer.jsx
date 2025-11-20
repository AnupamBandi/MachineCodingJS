import React from "react";
import "./toast.css"; 

const POSITIONS = {
  success: "top-right",
  warn: "top-left",
  error: "bottom-right",
};

const ICONS = {
  success: "✔️",
  warn: "⚠️",
  error: "❌",
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type} position-${
            POSITIONS[toast.type]
          }`}
        >
          <span className="toast-icon">{ICONS[toast.type]}</span>
          <span>{toast.message}</span>

          <button className="toast-close" onClick={() => removeToast(toast.id)}>
            ×
          </button>
        </div>
      ))}
    </>
  );
};

export default ToastContainer;
