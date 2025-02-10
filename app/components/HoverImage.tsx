'use client';

// components/HoverImage.tsx
import Image from 'next/image';
import ExpandedImage from './ExpandedImage';
import { useState } from 'react';
import ExpandedLogs from './ExpandedLogs';

interface HoverImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  hoverEffect?: string; // Optional: Tailwind classes or custom effects
  className?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  src,
  alt,
  width,
  height,
  hoverEffect = 'transition-transform duration-300 group-hover:scale-105',
  className = ''
}) => {
  // Expanded Logs
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  const handleOpenLogs = () => {
    setIsLogsOpen(true);
  };

  const handleCloseLogs = () => {
    setIsLogsOpen(false);
  };
  // Expanded fullscreen image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src })
      });
      if (!response.ok) throw new Error('Network response was not ok');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element for the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'downloaded-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download the image:', error);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover rounded-lg shadow-lg ${hoverEffect}`}
      />
      {/* Dark hover filter */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-70 rounded-lg flex justify-center items-center gap-4">
        {/* Svg icons */}
        {/* Download */}
        <div className="cursor-pointer" onClick={handleDownload}>
          <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#FFFFFF">
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </div>
        {/* Expand image */}
        <div className="cursor-pointer" onClick={handleOpenModal}>
          <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#FFFFFF">
            <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z" />
          </svg>
        </div>
        {/* Logs */}
        <div className="cursor-pointer" onClick={handleOpenLogs}>
          <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#FFFFFF">
            <path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>

      <ExpandedImage isOpen={isModalOpen} imageUrl={src} altText={alt} onClose={handleCloseModal} />
      <ExpandedLogs isOpen={isLogsOpen} imageUrl={src} onClose={handleCloseLogs} />
    </div>
  );
};

export default HoverImage;
