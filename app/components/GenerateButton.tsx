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
      className="p-4 bg-[#fdf17a]/90 rounded-xl shadow mt-4 flex items-center justify-center text-black/90 text-[28px] leading-7 transition duration-150 hover:bg-[#fdf17a]/70"
    >
      {props.text}
    </button>
  );
};

export default GenerateButton;
