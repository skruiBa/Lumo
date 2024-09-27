// app/Lab/page.tsx
'use client';

import Image from 'next/image';
import CustomTextArea from '../components/CustomTextArea';
import Button from '../components/GenerateButton';
import PageCard from '../components/PageCard';
import CustomSlider from '../components/CustomSlider';
import CustomCheckbox from '../components/CustomCheckBox';
import HoverImage from '../components/HoverImage';
import ToastPopup from '../components/ToastPopup';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function MainPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('cat is in the bag');
  const [seed, setSeed] = useState(42);
  const [randomizeSeed, setRandomizeSeed] = useState(true);
  const [numInferenceSteps, setNumInferenceSteps] = useState(4);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastColor, setToastColor] = useState<string>('bg-gray-800');

  // Stored images & Load stored images from localStorage on initial load
  const [storedImages, setStoredImages] = useState<string[]>([]);
  const pathname = usePathname(); // Use the usePathname hook

  // Update stored images whenever the page is loaded or navigated to
  const updateStoredImages = () => {
    const images = JSON.parse(localStorage.getItem('storedImages') || '[]');
    console.log('Loaded images from localStorage:', images); // Debugging line
    setStoredImages(images);
  };

  useEffect(() => {
    updateStoredImages(); // Run on mount and on route change
  }, [pathname]);

  const handleGenerateImage = async () => {
    setToastMessage('Generating picture, please wait!'); // Show error message
    setToastColor('bg-yellow-600');
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST', // Update to POST request
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
          seed,
          num_inference_steps: numInferenceSteps,
          randomize_seed: randomizeSeed
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const result = await response.json();

      const url = result.data[0].url;
      const logs = {
        input: result.requestMessage,
        results: result.data[0]
      };
      localStorage.setItem(`${url}-logs`, JSON.stringify(logs));
      console.log(localStorage.getItem(`${url}-logs`));

      setImageUrl(url);

      // Update the stored images list and save to localStorage
      const updatedImages = [url, ...storedImages].slice(0, 3); // Keep only the latest 3 images at bottom section
      setStoredImages(updatedImages);
      localStorage.setItem('storedImages', JSON.stringify(updatedImages));

      setToastMessage('Image generated successfully!');
      setToastColor('bg-green-600');
    } catch (error) {
      console.error(error);
      setToastMessage('Error generating image. Please try again later.');
      setToastColor('bg-red-600');
    }
  };

  const handleCloseToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="flex mx-10 gap-16 justify-center mt-[16px]">
      {/* Left side: prompt options */}
      <PageCard
        width="500px"
        height="650px"
        className="bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 flex flex-col gap-2"
      >
        {/* Prompt */}
        <div className="text-[#fbeadc]/90 text-[20px] leading-loose ">Prompt</div>
        <CustomTextArea width="100%" height="25%" value={prompt} onChange={(e) => setPrompt(e?.target?.value)} />

        {/* Seed */}
        <div className="text-[#fbeadc]/90 text-[20px] leading-loose ">Seed</div>
        <CustomSlider value={seed} onChange={(_, value) => setSeed(value as number)} min={0} max={100} />

        {/* Randomize */}
        <div className="text-[#fbeadc]/90 text-[20px] leading-loose ">Randomize seed</div>
        <CustomCheckbox checked={randomizeSeed} onChange={(checked) => setRandomizeSeed(checked)} />

        {/* Inference Steps */}
        <div className="text-[#fbeadc]/90 text-[20px] leading-loose ">Number of inference steps</div>
        <CustomSlider
          value={numInferenceSteps}
          onChange={(_, value) => setNumInferenceSteps(value as number)}
          min={1}
          max={50}
        />

        {/* Generate Button */}
        <div className="flex-grow" />
        <div className="mt-auto flex justify-center">
          <Button text="Generate" onClick={handleGenerateImage} />
        </div>
      </PageCard>

      {/* Image Section */}
      <PageCard
        width="500px"
        height="650px"
        className="bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 flex flex-col gap-2"
      >
        {/* Top section, Large image */}
        <div className="flex-grow">
          {imageUrl ? (
            <HoverImage
              src={imageUrl}
              alt="Generated Image"
              width={680}
              height={680}
              className="object-cover rounded-lg shadow-lg"
            />
          ) : (
            <HoverImage src={storedImages[0]} alt="Main Placeholder" width={680} height={680} />
          )}
        </div>
        {/* Bottom section, Stored images */}
        <div className="h-1/4 flex items-center justify-center">
          <div className="justify-center items-center flex flex-row gap-8">
            {storedImages.map((img, index) => (
              <HoverImage key={index} src={img} alt={`Stored image ${index + 1}`} width={130} height={130} />
            ))}
          </div>
        </div>
      </PageCard>

      {/* Show the Toast if there's a message */}
      {toastMessage && (
        <ToastPopup message={toastMessage} onClose={handleCloseToast} duration={3000} color={toastColor} />
      )}
    </div>
  );
}

export default MainPage;
