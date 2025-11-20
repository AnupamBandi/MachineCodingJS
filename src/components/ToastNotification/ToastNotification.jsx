import React, { useState } from "react";

const POSITIONS = {
  success: { top: "1rem", right: "1rem" },
  warn: { top: "1rem", left: "1rem" },
  error: { bottom: "1rem", right: "1rem" },
  "bottom-left": { bottom: "1rem", left: "1rem" },
};

const ToastNotification = () => {
  const [notifiArr, setNotifiArr] = useState([]);

  const handleNotification = (type) => {
    const id = Date.now();

    setNotifiArr((prev) => [...prev, { id, type }]);

    // Auto-remove toast
    setTimeout(() => {
      setNotifiArr((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <div>
      {notifiArr.map((n) => (
        <div
          key={n.id}
          style={{
            position: "fixed",
            zIndex: 9999,
            padding: "10px 16px",
            borderRadius: "6px",
            color: "#333",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            background:
              n.type === "success"
                ? "lightgreen"
                : n.type === "warn"
                ? "khaki"
                : "lightcoral",
            ...POSITIONS[n.type], // ← apply correct position
          }}
        >
          {n.type === "success"
            ? "Success Notifi"
            : n.type === "warn"
            ? "Warning Notifi"
            : "Error Notifi"}
        </div>
      ))}

      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => handleNotification("success")}>Success</button>
        <button onClick={() => handleNotification("warn")}>Warning</button>
        <button onClick={() => handleNotification("error")}>Error</button>
      </div>
    </div>
  );
};

export default ToastNotification;
