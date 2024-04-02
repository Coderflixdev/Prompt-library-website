import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Header = () => {
    const [click, setClick] = useState('')
    const handleClick = () =>  setClick(!click); 

    const content =  <nav className='z-10 lg:hidden fixed top-0 left-0 bottom-0 pt-[50px] bg-[#1c1331] backdrop-filter backdrop-blur-lg bg-opacity-30 w-[300px] h-[100vh] flex gap-[20px] flex-col items-center transition ease-out duration-700'>
           <button className="absolute top-[25px] right-[25px] sm:hidden hover:transition" onClick={handleClick}>
             {click &&  <FaTimes className="text-white"/>}
         </button>
         <Link to='/' className='text-white text-2xl' >Logo</Link>
            <ul className='text-[#A6A9B8] text-[18px] flex flex-col gap-[36px]'>
                <li>About</li>
                <li>Case Studies</li>
                <li>Testimonial</li>
                <li>Blogs</li>
            </ul>
           <button className='text-white px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]'>Get Start</button>
           </nav>
    return (
        <div className="lg:px-[100px] lg:py-[30px] p-[40px] sticky top-0 z-10  bg-[#1c1331] backdrop-filter backdrop-blur-lg bg-opacity-30">
           <nav className='flex justify-between items-center'>
           <Link to='/' className='text-2xl text-white' >Logo</Link>
            {/* <img src={logo} alt="" /> */}
            <ul className='text-[#A6A9B8] text-[18px] lg:flex hidden gap-[36px]'>
                <li>About</li>
                <li>Case Studies</li>
                <li>Testimonial</li>
                <li>Blogs</li>
            </ul> 
            <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] lg:flex hidden'>Get Start</button>
           {
             <button className="block sm:hidden hover:transition-none " onClick={handleClick}>
             {!click &&  <HiMenuAlt1 className="text-white text-[25px]"/>}
         </button>

           }
           </nav>

           {/*  */}

           {
            click && content
           }
           
        </div>
    );
};

export default Header;