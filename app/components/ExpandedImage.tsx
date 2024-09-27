// components/FullScreenModal.tsx
'use client';

import Image from 'next/image';

interface ExpandedImageProps {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ExpandedImage: React.FC<ExpandedImageProps> = ({ isOpen, imageUrl, altText, onClose }) => {
  if (!isOpen) return null;
  console.log('in ExpandedImage');
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
      <div className="relative">
        <Image src={imageUrl} alt={altText} width={800} height={800} className="object-contain rounded-lg" />
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ExpandedImage;
