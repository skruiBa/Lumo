'use client';
import React from 'react';

interface SizeOption {
  label: string;
  value: string;
}

interface CustomRadioProps {
  id: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ id, value, label, checked, onChange, className = '' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <input
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
        className={`w-8 h-8 appearance-none checked:bg-[#e69d37] checked:border-transparent bg-gray-300 border border-gray-500 rounded-full ${className}`}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

interface CustomRadioGroupProps {
  options: SizeOption[];
  selected: string;
  onChange: (value: string) => void;
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <CustomRadio
          key={option.value}
          id={`radio-${option.value}`}
          value={option.value}
          label={option.label}
          checked={selected === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default CustomRadioGroup;
