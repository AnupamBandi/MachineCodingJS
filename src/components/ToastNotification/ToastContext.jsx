import React, { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";


const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const generateId = () => Date.now() + Math.random();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((type, message) => {
    const id = generateId();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  }, []);

  const removeToast = useCallback((id)=>{
    setToasts((prev)=> prev.filter(t => t.id !== id))

  },[]);

  return (
    <ToastContext.Provider value={{showToast}}>
        {children}
        <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )


}
