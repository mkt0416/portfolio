
'use client';
import Image from 'next/image';
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_70wpcec',
                'template_uq7vokl',
                form.current, {
                publicKey: 'wm855IaIUENmeFqbX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className='w-full container mx-auto px-8 md:px-14 lg:px-24 mt-64 mb-20'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Contact</h2>
                </div>
                <p className='text-secondary max-w-3xl my-8'>
                    If you are interested in my background, please feel free to contact me.
                    <br />
                    I will respond immediately.
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32'>
                    <div>
                        <form
                            onSubmit={sendEmail}
                            ref={form}
                            className='w-full'
                        >
                            <input
                                className='w-full bg-input border border-input-border rounded
                                py-3 px-4 mb-4 leading-tight'
                                type="text"
                                name='name'
                                placeholder='Your Name'
                                required
                            />
                            <input
                                className='w-full bg-input border border-input-border rounded
                                py-3 px-4 mb-4 leading-tight'
                                type="email"
                                name='email'
                                placeholder='Your MailAdress'
                                required
                            />
                            <input
                                className='w-full bg-input border border-input-border rounded
                                py-3 px-4 mb-4 leading-tight'
                                type="text"
                                name='subject'
                                placeholder='Subject'
                                required
                            />
                            <textarea
                                className='w-full bg-input border border-input-border rounded
                                py-3 px-4 mb-4 leading-tight'
                                type="text"
                                name='message'
                                placeholder='Message'
                                rows={'7'}
                                required
                            />
                            <button
                                type='submit'
                                className='bg-theme font-bold py-3 px-6 rounded-md hover:bg-purple-700
                                duration-300 cursor-pointer'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div>
                        <Image
                            className='rounded-xl'
                            src={'/images/portfolio4.jpg'} width={400} height={400} alt='image' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;