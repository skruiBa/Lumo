// components/ExpandedLogs.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ExpandedLogsProps {
  isOpen: boolean;
  imageUrl: string;

  onClose: () => void;
}

const ExpandedLogs: React.FC<ExpandedLogsProps> = ({ isOpen, imageUrl, onClose }) => {
  // const [logs, setLogs] = useState<string | null>(null);

  // useEffect(() => {
  //   if (isOpen) {
  //     // Fetch logs from localStorage when the modal opens
  //     const logsString = localStorage.getItem(`${imageUrl}-logs`);

  //     if (logsString !== null) {
  //       try {
  //         const parsedLogs = JSON.parse(logsString);
  //         setLogs(parsedLogs); // Store parsed logs in state
  //       } catch (error) {
  //         console.error('Error parsing logs:', error);
  //       }
  //     } else {
  //       setLogs(null); // No logs found
  //     }
  //   }
  // }, [isOpen, imageUrl]);

  // Prevent the modal from rendering if not open
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur"
      onClick={handleOutsideClick}
    >
      <div className="relative ">
        <div className="bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 w-[800px] h-[800px]">
          <p className="text-[#ffffff] whitespace-pre-wrap">{logs ? JSON.stringify(logs, null, 2) : 'No logs found'}</p>
        </div>

        {/* Close button */}
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ExpandedLogs;
