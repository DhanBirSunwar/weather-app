import Image from 'next/image';
import React from 'react';
import spinner from '../public/spinner.gif';

const Spinner = () => {
  return (
    <div className="grid h-screen place-content-center">
      <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </div>
  );
};

export default Spinner;