
import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { motion } from 'framer-motion';

const ProjectCard = ({ name, image, setSelectedImage }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='bg-white text-black rounded-lg p-4 mb-4'>
            <img src={image} alt={`${name}image`} className='rounded-lg mb-2' />
            <h3 className='mb-1'>{name}</h3>
            <button
                onClick={() => setSelectedImage(image)}
            >
                <FaSearchPlus />
            </button>
        </motion.div>
    );
};

export default ProjectCard;