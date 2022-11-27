import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1050px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ff0707]'>Hello my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          BRIAN LIM
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I have a <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#ff5111] to-[#fee500]'>passion</span> for 
          <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#47fb0b] to-[#00fefa]'> creation</span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a 3rd year student studying Information Systems in Singapore Management University. I'm majoring in Digital Cloud Solutions, and I enjoy building websites because it is fun.
        </p>
        <div>
        <Link to="about" smooth={true} offset={50} duration={500} >
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            About me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;