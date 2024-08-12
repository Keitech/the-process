import React from 'react';

interface Props {
  children: JSX.Element;
}

const CenterText = ({ children }: Props) => {
  return (
    <div className='flex justify-start lg:justify-center w-full'>
      <div className='md:w-[80%] xl:mr-40 xl:w-[50%] lg:w-[60%] w-full'>{children}</div>
    </div>
  );
};

export default CenterText;
