
'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const headerListItem = [
    {
        id: 1,
        title: 'Home',
        link: '#home',
    },
    {
        id: 2,
        title: 'About',
        link: '#about',
    },
    {
        id: 3,
        title: 'Portfolio',
        link: '#portfolio',
    },
    {
        id: 4,
        title: 'Skills',
        link: '#skills',
    },
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header id='home' className='py-6'>
            <div className='w-full container mx-auto flex justify-between items-center px-8
            md:px-14 lg:px-24'>
                <Link href={'/'} className='relative group overflow-hidden'>
                    <p className='text-2xl font-bold'>My Portfolio</p>
                    <span className='absolute w-full h-[2px] bg-theme bottom-0 inline-block
                    -translate-x-[100%] group-hover:-translate-x-0 transition-transform duration-700'></span>
                </Link>

                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center space-x-8 font-medium'>
                        {headerListItem.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                            >
                                <li className='hover:text-selected-text duration-300 group relative'>
                                    {item.title}
                                    <span className='absolute w-full h-[2px] bg-selected-text -bottom-[1px] left-0
                                    inline-block scale-0 group-hover:scale-100 transition-transform duration-500
                                    cursor-pointer'></span>
                                </li>
                            </Link>
                        ))}
                        <Link href={'#contact'}>
                            <button className='bg-theme font-bold py-2 px-4 rounded-md hover:bg-purple-700
                            duration-300 cursor-pointer'>
                                Contact
                            </button>
                        </Link>
                    </ul>
                </nav>

                <div
                    onClick={() => setShowMenu(true)}
                    className='md:hidden w-7 h-5 flex flex-col justify-between group overflow-hidden cursor-pointer'
                >
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme inline-flex
                    -translate-x-1 group-hover:-translate-x-0 duration-500'></span>
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme inline-flex
                    -translate-x-3 group-hover:-translate-x-0 duration-500'></span>
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme'></span>
                </div>

                {showMenu && (
                    <div className='fixed top-0 left-0 z-50 w-full h-screen bg-badge bg-opacity-80'>
                        <motion.div
                            className='w-[70%] h-full bg-badge relative p-6'
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span
                                onClick={() => setShowMenu(false)}
                                className='absolute top-6 right-6 text-3xl text-red-200 hover:text-red-600
                                duration-300 cursor-pointer'
                            >
                                <IoCloseSharp />
                            </span>
                            <Link
                                onClick={() => setShowMenu(false)}
                                href={'#home'}
                            >
                                <p className='text-2xl font-bold mb-4'>My Portfolio</p>
                            </Link>
                            <ul className='flex flex-col gap-3 text-gray-300 font-medium'>
                                {headerListItem.map((item) => (
                                    <Link
                                        onClick={() => setShowMenu(false)}
                                        key={item.id}
                                        href={item.link}
                                    >
                                        <li className='hover:text-white duration-300 cursor-pointer'>
                                            {item.title}
                                        </li>
                                    </Link>
                                ))}
                                <Link
                                    onClick={() => setShowMenu(false)}
                                    href={'#contact'}
                                >
                                    contact
                                </Link>
                            </ul>
                        </motion.div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;