import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-black text-white flex box-border flex-col w-full '>
            <div className='w-full p-2'></div>
            <form className='w-full bg-gradient-to-r from-sky-500 to-red-500 text-black p-2 box-border flex flex-col md:flex-row md:items-center   justify-center gap-2 md:h-24'>
                <p className='font-bold text-white'>Sign up for $20 off your next order</p>
                <input type='email' className='p-2 bg-gray-100 w-1/2 focus:overline md:w-1/3 rounded'></input>
                <button type='submit' className='bg-black text-white p-2 h-fit w-1/3 max-w-fit rounded transition-all duration-200  hover:bg-gray-700 '>Sign Up</button>
            </form>
            <div className='w-full flex flex-wrap  items-center justify-center gap-10 p-2'>
                <p className=' text-center text-white/70 hover:text-white' target='_' href=''>Returns</p>
                <p className=' text-center text-white/70 hover:text-white' target='' href=''>Policies</p>
                <a className=' text-center text-white/70 hover:text-white' target='_' href='https://github.com/Tyson229/eShop'>Github</a>
                <a className=' text-center text-white/70 hover:text-white' target='_' href='https://www.linkedin.com/in/tien-khoa-nguyen-888463218/'>LinkedIn</a>
            </div>
            <div className='w-full text-right p-2  flex items-center justify-center'>Created by @Tyson229</div>
        </footer>
    )
}

export default Footer;