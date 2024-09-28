'use client';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const GenerateButton: React.FC<ButtonProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!');
  };
  return (
    <button
      onClick={props.onClick}
      className="relative w-[80%] inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out rounded-full shadow-lg group overflow-hidden hover:scale-105"
    >
      {/* Background gradient with animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 opacity-75 group-hover:opacity-100 transition-all duration-500 ease-out transform skew-x-12 group-hover:skew-x-0 animate-gradient-x"></span>

      {/* Shiny effect */}
      <span className="absolute inset-0 w-0 h-full bg-white opacity-10 group-hover:w-full group-hover:opacity-30 transition-all duration-700 ease-out transform rotate-45"></span>

      {/* Glowing shadow and blur */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full filter blur-lg opacity-60 group-hover:opacity-80 transition duration-500 ease-out"></span>

      {/* Button text */}
      <span className="relative text-black text-[24px] z-10 transition-transform duration-300 ease-out group-hover:scale-110">
        {props.text}
      </span>
    </button>
  );
};

export default GenerateButton;
