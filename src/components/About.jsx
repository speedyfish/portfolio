import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Bonjour! I'm Brian and I aspire to be a full-stack developer.</p>
            </div>
            <div>
              <p>I learnt to build websites from University and Youtube. I know HTML, CSS, and Javascript. I use React mostly, and am willing to learn more everyday. I have experience in Object Oriented Programming with Java. My favourtie Backend languages are NodeJS and Flask.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;