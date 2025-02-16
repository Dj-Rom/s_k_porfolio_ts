import React from 'react';
import placeholderImg from '../assets/images/placeholder_img.jpg'; // Import the placeholder

interface ImgProps {
  width?: number;
  height?: number;
  urlImg?: string;
  className?: string;
  alt: string;
}

const Img: React.FC<ImgProps> = ({
  width = 576,
  height = 661,
  urlImg,
  className,
  alt,
}) => {
  return (
    <img
      src={urlImg || placeholderImg}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        e.currentTarget.src = placeholderImg;
      }}
    
    />
  );
};

export default Img;
