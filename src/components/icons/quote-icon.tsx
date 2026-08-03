import React from "react";

interface QuoteIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const QuoteIcon: React.FC<QuoteIconProps> = ({
  width = 18,
  height,
  color = "#D9471E",
  className = "",
  ...props
}) => {
  const computedHeight = height ?? (width * 15) / 18;

  return (
    <svg
      width={width}
      height={computedHeight}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.33918 0.131277C2.57418 2.54928 0.482518 5.36378 0.0641844 8.57478C-0.587316 13.5733 3.88268 16.0198 6.14768 13.8218C8.41268 11.6238 7.05518 8.83328 5.41518 8.07028C3.77518 7.30728 2.77218 7.57328 2.94718 6.55378C3.12218 5.53428 5.45518 2.70878 7.50518 1.39278C7.57773 1.33094 7.62399 1.24379 7.63458 1.14905C7.64517 1.05432 7.61928 0.959108 7.56218 0.882777L7.05518 0.223277C6.83518 -0.0627227 6.62418 -0.0517229 6.33918 0.130777M16.2522 0.131277C12.4872 2.54928 10.3955 5.36378 9.97718 8.57478C9.32518 13.5733 13.7952 16.0198 16.0602 13.8218C18.3252 11.6238 16.9677 8.83328 15.3272 8.07028C13.6867 7.30728 12.6842 7.57328 12.8592 6.55378C13.0342 5.53428 15.3677 2.70878 17.4177 1.39278C17.4901 1.33087 17.5363 1.24369 17.5468 1.14895C17.5573 1.05422 17.5313 0.959048 17.4742 0.882777L16.9677 0.223277C16.7477 -0.0627227 16.5367 -0.0517229 16.2522 0.130777"
        fill={color}
      />
    </svg>
  );
};

export default QuoteIcon;
