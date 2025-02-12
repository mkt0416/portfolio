
'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const aboutItem = [
    { id: 1, number: '900+', title: 'YOUTUBE', },
    { id: 2, number: '40+', title: 'PROJECT', },
    { id: 3, number: '3+', title: 'YEARS', },
];

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div id='about' className='w-full container mx-auto px-8 md:px-14 lg:px-24 mt-64'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>About</h2>
                </div>
                <p className='text-secondary max-w-3xl my-8'>I will introduce myself.</p>

                <div>
                    <p className='text-lg md:text-xl leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis nisi molestias cum consectetur ab magni architecto corrupti, nihil suscipit porro obcaecati in exercitationem minus id nemo voluptatem nostrum inventore!
                    </p>
                </div>

                <div className='mt-20'>
                    <div className='w-full'>
                        <ul className='flex flex-col md:flex-row justify-between gap-10'>
                            {aboutItem.map((item) => (
                                <li
                                    className='w-full'
                                    key={item.id}
                                >
                                    <div className='bg-badge rounded-lg py-[30px] md:py-[60px] text-center'>
                                        <h3 className='text-gray-400 text-4xl font-bold mb-2'>{item.number}</h3>
                                        <span>{item.title}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;