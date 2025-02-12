
'use client';
import React, { useEffect } from 'react'
import { FaHtml5, FaJsSquare, FaPython } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    {
        id: 1,
        title: 'JavaScript',
        icon: <FaJsSquare />,
        className: 'text-yellow-300',
        hover: 'hover:border-yellow-300',
        comment1: 'Website Developmen',
        comment2: 'Frontend Development',
        description: 'JavaScript Engineer. I work in a development environment using React on a regular basis.'
    },
    {
        id: 2,
        title: 'python',
        icon: <FaPython />,
        className: 'text-blue-500',
        hover: 'hover:border-blue-500',
        comment1: 'AI/DX',
        comment2: 'Data Science',
        description: 'I primarily take on AI development projects and also handle data analysis for businesses.'
    },
    {
        id: 3,
        title: 'HTML/CSS',
        icon: <FaHtml5 />,
        className: 'text-orange-600',
        hover: 'hover:border-orange-600',
        comment1: 'UI/UX',
        comment2: 'Website Creation',
        description: 'I have worked on the creation of websites for over 100 companies. There is no website I cannot create.'
    },
];

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div id='skills' className='w-full container mx-auto px-8 md:px-14 lg:px-24 mt-64'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Skill Stack</h2>
                </div>
                <p className='text-secondary max-w-3xl my-8'>I have been working with the following programming languages for over 10 years.</p>

                {skills.map((item) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='my-16'
                        key={item.id}
                    >
                        <div className={`border border-purple-300 ${item.hover} duration-300 flex flex-col lg:flex-row
                        items-center p-16 lg:py-20 lg:px-32 lg:space-x-32 cursor-pointer`}>
                            <div className={`text-9xl ${item.className} mb-6 lg:mb-0`}>
                                {item.icon}
                            </div>
                            <div className='text-center lg:text-left'>
                                <h3 className='text-3xl font-bold'>{item.title}</h3>
                                <div className='flex flex-wrap justify-center lg:justify-start my-8 gap-3'>
                                    <div className='bg-badge py-2 px-4 text-sm'>{item.comment1}</div>
                                    <div className='bg-badge py-2 px-4 text-sm'>{item.comment2}</div>
                                </div>
                                <p className='text-secondary'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Skills;