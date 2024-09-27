// components/Toast.tsx
'use client';

import { useEffect } from 'react';

interface ToastPopupProps {
  message: string;
  onClose: () => void;
  color?: string;
  duration?: number;
}

const ToastPopup: React.FC<ToastPopupProps> = ({ message, onClose, duration, color = 'bg-gray-800' }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow-lg flex items-center ${color}`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-xl font-bold">
        &times;
      </button>
    </div>
  );
};

export default ToastPopup;
