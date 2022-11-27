import React from 'react';
import ReactCountryFlag from "react-country-flag"

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
              <p>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff5111] to-[#fee500]'>
                Bonjour! &nbsp;
                </span>
                 I aspire to be a software developer in France. <ReactCountryFlag countryCode="FR" svg /></p>
            </div>
            <div>
              <p>I have always liked the idea of having ownership of a website that touches the lives of thousands of people. 
                I learnt full-stack development from university and Youtube, with the dream that one day I can create an awesome website.
                My favourite tech stack is React for frontend, and NodeJS or Flask
                for backend. I have experience in Object-Oriented Programming with JAVA. I am not a coding god, but I have
                a fiery passion to create.
                </p>  
                <br/>
                <p>
                P.S Je connais un peu le francais.
                </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;