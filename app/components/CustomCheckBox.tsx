'use client';
import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <input type="checkbox" checked={props.checked} onChange={handleChange} className={props.className} />
    </div>
  );
};

export default CustomCheckbox;
