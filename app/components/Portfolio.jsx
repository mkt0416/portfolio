
'use client';
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filtered, setFiltered] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(9);
    const [selectedImage, setSelectedImage] = useState();

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };

    return (
        <div id='portfolio' className='w-full container mx-auto px-8 md:px-14 lg:px-24 mt-64'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>My Portfolio</h2>
                </div>
                <p className='text-secondary max-w-3xl my-8'>Here are the web applications I have developed.</p>

                <ProjectFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    setFiltered={setFiltered}
                />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filtered.slice(0, visibleProjects).map((project, index) => (
                        <AnimatePresence key={index}>
                            <ProjectCard
                                name={project.name}
                                image={project.image}
                                setSelectedImage={setSelectedImage}
                            />
                        </AnimatePresence>
                    ))}
                </div>
                {visibleProjects < filtered.length && (
                    <div className='w-full text-center mt-4'>
                        <button
                            onClick={loadMoreProjects}
                            className='bg-theme py-1 px-3 rounded-md'>More</button>
                    </div>
                )}
            </section>
            <Modal
                urlImg={selectedImage}
                onclose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default Portfolio;