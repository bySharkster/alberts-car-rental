import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Call onClose to potentially remove the toast from parent state
    }, 3000); // Toast visible for 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 p-4 rounded-lg text-white bg-green-600 shadow-lg ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out`}
      style={{ transitionProperty: "opacity, transform" }}
    >
      {message}
    </div>
  );
};

export default Toast;
