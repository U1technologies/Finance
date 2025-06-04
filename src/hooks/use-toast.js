
import { useState } from "react";

const toastTypes = {
  default: "default",
  destructive: "destructive",
};

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = "default", action, ...props }) => {
    const id = Math.random().toString(36).substring(2, 15);
    const newToast = {
      id,
      title,
      description,
      variant,
      action,
      ...props,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 5000);

    return {
      id,
      dismiss: () => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id)),
      update: (newToast) => setToasts((prevToasts) => 
        prevToasts.map((toast) => toast.id === id ? { ...toast, ...newToast } : toast)
      ),
    };
  };

  const dismiss = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
  };

  return {
    toast,
    dismiss,
    toasts,
  };
}
