'use client';

import Image from 'next/image';

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  handleOnClick
}: {
  label?: string,
  iconURL?: string,
  backgroundColor?: string,
  textColor?: string,
  borderColor?: string,
  fullWidth?: boolean,
  handleOnClick?: () => void
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border border-white font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "btn-gradient text-white"
      } rounded-full ${fullWidth && "w-full"}`}
      onClick={() => handleOnClick && handleOnClick()}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt='icon'
          width={5}
          height={5}
          className='ml-2 rounded-full  w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;