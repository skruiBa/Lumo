'use client';
interface PageCardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageCard: React.FC<PageCardProps> = (props) => {
  return (
    <div style={{ width: props.width, height: props.height }} className={` ${props.className}`}>
      {props.children}
    </div>
  );
};

export default PageCard;
