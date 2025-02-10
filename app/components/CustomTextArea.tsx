'use client';

interface TextAreaProps {
  width: string;
  height: string;
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      className={`bg-[#121212] text-start text-[#fbeadc]/75 text-[20px] leading-normal rounded-[11px] p-2 focus:outline focus:outline-2 focus:outline-[#e69d37]/80 resize-none`}
      style={{
        width: props.width,
        height: props.height
      }}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomTextArea;
