import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='relative w-full py-4 md:py-9'>
      <span className='title-shadow'>{title}</span>
      <h1 className="text-[28px] md:text-title leading-title text-para font-medium">{title}</h1>
    </div>
  );
};

export default Title;
