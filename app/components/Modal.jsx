
'use client';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Modal = ({ urlImg, onclose }) => {
    if (!urlImg) return null;

    return (
        <div
            onClick={onclose}
            className='fixed inset-0 bg-black bg-opacity-70
            flex items-center justify-center'
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='relative bg-white p-8 rounded-lg max-w-3xl'
            >
                <img
                    className='rounded-lg w-full h-auto'
                    src={urlImg} alt="portfolio"
                />
                <button
                    onClick={onclose}
                    className='absolute top-2 right-2 text-black text-2xl'
                >
                    <IoCloseSharp />
                </button>
            </motion.div>
        </div>
    );
};

export default Modal