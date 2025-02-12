
'use client';
import Image from 'next/image';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const promotionContent = {
    text: {

        title: 'You can aim one level higher!',
        discription:
            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis, sequi iste illo, voluptate similique odit aperiam quod debitis velit accusamus? Enim ipsa officiis beatae quod placeat id natus nobis.',
    },
    images: {
        img1: '/images/portfolio1.jpg',
        img2: '/images/portfolio2.jpg',
        img3: '/images/portfolio3.jpg',
        img4: '/images/portfolio4.jpg',
        img5: '/images/portfolio5.jpg',
    },
};

const Promotion = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <section className='mt-64'>
            <div className=' w-full h-full container mx-auto px-8 md:px-14 lg:px-24'>
                <div className='lg:flex justify-between items-center'>
                    {/* Left */}
                    <div className='lg:w-5/12'>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className='text-4xl font-bold mb-10'
                        >{promotionContent.text.title}</h1>
                        <p
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className='text-secondary mb-10 lg:mb-0'
                        >{promotionContent.text.discription}</p>
                    </div>
                    {/* Right */}
                    <div className='lg:w-6/12 space-y-2'>
                        {/* Top */}
                        <div className='flex space-x-2 items-stretch'>
                            <div className='w-8/12'>
                                <Image
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                    className='w-full h-auto rounded-2xl bg-cover'
                                    src={promotionContent.images.img1} width={400} height={400} alt='img1'
                                />
                            </div>
                            <div className='w-4/12 space-y-2 self-end'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <Image
                                            data-aos="fade-down"
                                            data-aos-delay="300"
                                            className='w-full h-auto rounded-2xl bg-cover'
                                            src={promotionContent.images.img2} width={400} height={400} alt='img2'
                                        />
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                        className='bg-purple-800 rounded-2xl rounded-tr-[200px]'
                                    />
                                </div>
                                <div>
                                    <Image
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                        className='w-full h-auto rounded-2xl bg-cover'
                                        src={promotionContent.images.img3} width={400} height={400} alt='img3'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className='flex space-x-2'>
                            <div className='w-4/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="300"
                                        className='bg-green-800 rounded-2xl rounded-bl-[200px]'
                                    />
                                    <div>
                                        <Image
                                            data-aos="fade-up"
                                            data-aos-delay="300"
                                            className='w-full h-auto rounded-2xl bg-cover'
                                            src={promotionContent.images.img4} width={400} height={400} alt='img4'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-7/12'>
                                <Image
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className='w-full h-auto rounded-2xl bg-cover'
                                    src={promotionContent.images.img5} width={400} height={400} alt='img5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotion;