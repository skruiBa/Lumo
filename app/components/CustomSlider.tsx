'use client';
// components/Slider.tsx
import React from 'react';
import Slider from '@mui/material/Slider';
interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Slider
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={props.min}
        max={props.max}
        color="secondary"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CustomSlider;
