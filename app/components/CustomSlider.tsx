'use client';
// components/Slider.tsx
import React from 'react';
import Slider from '@mui/material/Slider';
interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  className?: string;
  sx?: any;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  return (
    <Slider
      defaultValue={0}
      aria-label="Default"
      valueLabelDisplay="auto"
      min={props.min}
      max={props.max}
      value={props.value}
      className={`${props.className} w-auto`} // Ensures Tailwind is fully in control of width
      sx={{ ...props.sx, width: '100%' }} // Remove width overrides if any
      onChange={props.onChange}
    />
  );
};

export default CustomSlider;
