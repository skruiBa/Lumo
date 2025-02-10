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

function MainPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('a tiny astronaut hatching from an egg on the moon');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastColor, setToastColor] = useState<string>('bg-gray-800');
  const [toastDuration, setToastDuration] = useState<number>(3000);

  // Parameters
  const [isHD, setIsHD] = useState<boolean>(false);
  const [isVivid, setIsVivid] = useState<boolean>(false);
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
    <div className="flex mx-10 gap-16 justify-center mt-[16px]">
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
          <label className="text-[#fbeadc] text-[22px] font-semibold" htmlFor="vivid">
            Vivid
          </label>
          <CustomCheckbox checked={isVivid} onChange={setIsVivid} id="vivid" />
        </div>

        {/* HD: yes / no */}
        <div className="flex flex-row  justify-between">
          <label className="text-[#fbeadc] text-[22px] font-semibold" htmlFor="hd">
            HD
          </label>
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
      <PageCard width="500px" height="607px">
        {/* Top section, Large image */}
        <div className="flex-grow justify-center align-center">
          {imageUrl ? (
            <HoverImage
              src={imageUrl}
              alt="Generated Image"
              width={680}
              height={680}
              className="object-cover rounded-lg shadow-lg"
            />
          ) : (
            <></>
          )}
        </div>
      </PageCard>

      {/* Show the Toast if there's a message */}
      {toastMessage && (
        <ToastPopup message={toastMessage} onClose={handleCloseToast} duration={toastDuration} color={toastColor} />
      )}
    </div>
  );
}

export default MainPage;
