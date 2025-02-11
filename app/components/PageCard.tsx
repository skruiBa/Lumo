'use client';
interface PageCardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageCard: React.FC<PageCardProps> = (props) => {
  // bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 flex flex-col gap-6
  return (
    <div
      style={{ width: props.width, height: props.height }}
      className={` ${props.className} bg-secondary outline outline-2 outline-primary rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 gap-4 flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default PageCard;
