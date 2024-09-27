'use client';

interface TextAreaProps {
  width: string;
  height: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      className={`bg-[#d9d9d9]/20 text-start text-[#fbeadc]/75 text-[20px] leading-normal rounded-[11px] p-5 focus:outline focus:outline-1 focus:outline-[#fbeadc]/75`}
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
