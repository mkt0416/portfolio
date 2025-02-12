
'use client';
import React, { useEffect, useState } from 'react'
import { BsArrowUpSquareFill } from "react-icons/bs";

const TopMenuButton = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={`${scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50' : 'hidden'}`}>
            <a href="#home">
                <BsArrowUpSquareFill
                    className='text-theme bg-white rounded-xl hover:text-purple-700'
                    size={50}
                />
            </a>
        </div>
    );
};

export default TopMenuButton;