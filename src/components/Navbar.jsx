import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import Logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: " 75px"}} />
        </div>

        {/* menu */}

        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} offset={0} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} offset={50} duration={500} >
                    About
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} offset={50} duration={500} >
                    Projects
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} offset={50} duration={500} >
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} offset={50} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
            
        </div>

        {/* Mobile Menu */}
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <ul>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} offset={0} duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="about" smooth={true} offset={50} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="projects" smooth={true} offset={50} duration={500} onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="work" smooth={true} offset={50} duration={500} onClick={handleClick}>
                        Work
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link to="contact" smooth={true} offset={50} duration={500} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Social icons */}
        <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/brianlimjj" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/speedyfish" target="_blank">
                        Github  <FaGithub size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#069072]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="mailto:brianlimjj5@gmail.com">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#124a05]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1HYd7W89iEYaJI-9yXclR-m7GNWh6pmNo/view?usp=share_link" download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar