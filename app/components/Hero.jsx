
'use client';
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/animation.css';

const heroImages = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
            return () => clearInterval(interval);
        }, 4000);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div className='relative h-[650px] overflow-hidden'>
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    className='absolute right-0 w-full h-full bg-cover bg-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                </motion.div>
            </AnimatePresence>

            <div className='relative mt-24 md:ml-36 px-8 md:px-14 lg:px-24'>
                <div>
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 text-transparent bg-clip-text
                         bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg'
                        style={{ lineHeight: 1.2 }}
                    >
                        Hello!
                        <br />
                        Im Makoto!
                        <br />
                        web Developer
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='z-50 max-w-2xl text-lg md:text-xl text-gray-200 bg-white/10 px-6 py-3 
                        rounded-lg shadow-md backdrop-blur-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum tempore necessitatibus dolor esse blanditiis odit ea optio?
                    </p>
                </div>
            </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Hero;