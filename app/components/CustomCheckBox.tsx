'use client';
import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  id: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, className = '', id }) => {
  // Convert the event object into a boolean value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={`w-8 h-8 appearance-none checked:bg-[#e69d37] checked:border-transparent bg-gray-300 border border-gray-500 rounded ${className}`}
      />
    </div>
  );
};

export default CustomCheckbox;
