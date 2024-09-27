'use client';
import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <input type="checkbox" checked={props.checked} onChange={handleChange} className="form-checkbox h-6 w-6 " />
    </div>
  );
};

export default CustomCheckbox;
