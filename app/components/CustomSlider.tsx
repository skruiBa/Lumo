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
      className={props.className}
      min={props.min}
      max={props.max}
      value={props.value}
      sx={props.sx}
      onChange={props.onChange}
    />
  );
};

export default CustomSlider;
