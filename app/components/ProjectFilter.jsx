
'use client';
import React, { useEffect } from 'react'
import { projects } from '../constants/projects';

const ProjectFilter = ({ activeCategory, setActiveCategory, setFiltered }) => {

    useEffect(() => {
        if (activeCategory === 'all') {
            setFiltered(projects);
            return;
        }
        const filtered = projects.filter((project) => project.catgory.includes(activeCategory));
        setFiltered(filtered);
    }, [activeCategory]);

    return (
        <div className='my-10 flex items-center gap-5'>
            <button
                onClick={() => setActiveCategory('all')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'all' ? 'bg-theme' : null}`}
            >
                All
            </button>
            <button
                onClick={() => setActiveCategory('react')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'react' ? 'bg-theme' : null}`}
            >
                React
            </button>
            <button
                onClick={() => setActiveCategory('aws')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'aws' ? 'bg-theme' : null}`}
            >
                AWS
            </button>
            <button
                onClick={() => setActiveCategory('wordpress')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'wordpress' ? 'bg-theme' : null}`}
            >
                WordPress
            </button>
        </div>
    );
};

export default ProjectFilter;