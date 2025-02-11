// app/Lab/page.tsx
'use client';

import Image from 'next/image';
import CustomTextArea from './components/CustomTextArea';
import Button from './components/GenerateButton';
import PageCard from './components/PageCard';
import CustomSlider from './components/CustomSlider';
import CustomCheckbox from './components/CustomCheckBox';
import HoverImage from './components/HoverImage';
import ToastPopup from './components/ToastPopup';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CustomRadioGroup from './components/CustomRadioGroup';
import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

function MainPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('a tiny astronaut hatching from an egg on the moon');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastColor, setToastColor] = useState<string>('bg-gray-800');
  const [toastDuration, setToastDuration] = useState<number>(3000);

  // Parameters
  const [isHD, setIsHD] = useState<boolean>(true);
  const [isVivid, setIsVivid] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState('1024x1024');
  const sizeOptions = [
    { label: '1024x1024', value: '1024x1024' },
    { label: '1792x1024', value: '1792x1024' },
    { label: '1024x1792', value: '1024x1792' }
  ];

  const newHandleCreateImage = async () => {
    setToastAttributes('Generating image...', 'bg-[#e79f39]', 20000);

    const vividPrompt = isVivid ? 'vivid' : 'natural';
    const hdPrompt = isHD ? 'hd' : 'standard';
    try {
      const res = await fetch('/api/dalle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, selectedSize, hdPrompt, vividPrompt })
      });

      if (!res.ok) throw new Error('Failed to fetch response');

      const data = await res.json();
      // Use the returned property 'image'
      setImageUrl(data.image);
      console.log('Response:', data);
      setToastAttributes('Image generated successfully!', 'bg-green-600', 5000);

      // Set logs from localstorage

      const logs = {
        prompt: prompt,
        size: selectedSize,
        hd: hdPrompt,
        vivid: vividPrompt
      };

      localStorage.setItem(`${imageUrl}-logs`, JSON.stringify(logs));
    } catch (error) {
      console.error('Error:', error);
      setToastAttributes('Something went wrong. The service might be down. Please try again.', 'bg-red-600', 5000);
    }
  };

  const setToastAttributes = (message: string, color: string, duration: number) => {
    setToastDuration(duration);
    setToastColor(color);
    setToastMessage(message);
  };

  const handleCloseToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="flex mx-10 gap-16 justify-center mt-2">
      {/* Left side: prompt options */}
      <PageCard width="500px" height="607px">
        {/* Title Section */}
        {/* <div className="flex justify-center mb-4">
          <h1 className="text-[#fbeadc] text-[28px] font-bold">Image Generator</h1>
        </div> */}

        {/* Prompt Section */}
        <div className="flex flex-col">
          <label className="text-[#fbeadc] text-[22px] font-semibold" htmlFor="prompt">
            Prompt
          </label>
          <CustomTextArea
            width="100%"
            height="200px"
            value={prompt}
            id="prompt"
            onChange={(e) => setPrompt(e?.target?.value)}
          />
        </div>

        {/* Style: Vivid / natural */}
        <div className="flex flex-row  justify-between">
          <Tooltip
            sx={{
              fontSize: '2rem'
            }}
            placement="right"
            title="Recommended: ON. Vivid creates more hyper-real and dramatic images"
          >
            <label className="text-[#fbeadc] text-[22px] font-semibold flex items-center gap-2" htmlFor="vivid">
              Vivid
              <HelpIcon />
            </label>
          </Tooltip>
          <CustomCheckbox checked={isVivid} onChange={setIsVivid} id="vivid" />
        </div>

        {/* HD: yes / no */}
        <div className="flex flex-row  justify-between">
          <Tooltip placement="right" title="Recommended: ON. HD creates images with finer details">
            <label className="text-[#fbeadc] text-[22px] font-semibold flex items-center gap-2" htmlFor="hd">
              HD
              <HelpIcon />
            </label>
          </Tooltip>
          <CustomCheckbox checked={isHD} onChange={setIsHD} id="hd" />
        </div>
        {/* Size: 1024x1024, 1792x1024, 1024x1792 */}
        <div className="flex flex-row  justify-between">
          <label className="text-[#fbeadc] text-[22px] font-semibold">Resolution</label>
          <CustomRadioGroup options={sizeOptions} selected={selectedSize} onChange={setSelectedSize} />
        </div>

        {/* Generate Button */}
        <div className="mt-auto flex justify-center">
          <Button text="Generate Image" onClick={newHandleCreateImage} />
        </div>
      </PageCard>

      {/* Image Section */}
      <div className="flex items-center">
        {/* Top section, Large image */}
        <div className="flex-grow justify-center align-center">
          {imageUrl ? (
            <HoverImage
              src={imageUrl}
              alt="Generated Image"
              width={500}
              height={600}
              className="object-cover rounded-lg shadow-lg"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Show the Toast if there's a message */}
      {toastMessage && (
        <ToastPopup message={toastMessage} onClose={handleCloseToast} duration={toastDuration} color={toastColor} />
      )}
    </div>
  );
}

export default MainPage;
