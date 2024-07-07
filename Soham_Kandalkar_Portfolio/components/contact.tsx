'use client';
import React from 'react';
import SectionHeading from './sectionheading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await sendEmail(formData);
    if (response.error) {
      console.error('Error:', response.error);
      alert(`Error: ${response.error}`);
    } else {
      console.log(response.success);
      alert('Email sent successfully!');
      e.currentTarget.reset();  // Optionally reset the form after successful submission
    }
  };

  return (
    <motion.section 
      id='contact' 
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80 text-[0.9rem]'>
        Please contact me directly at <a className='underline' href='mailto:sohamkan15@gmail.com'>sohamkan15@gmail.com</a> or through this form.
      </p>

      <form className='mt-10 flex flex-col dark:text-black' onSubmit={handleSubmit}>
        <input 
          type='email'
          required 
          maxLength={100} 
          name='senderEmail'
          className='h-14 px-4 rounded-lg border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          placeholder='Your email'
        />
        <textarea 
          className='h-52 my-3 rounded-lg border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          name='senderMessage' 
          placeholder='Your message' 
          required 
          maxLength={500} 
        />
        <button 
          type='submit' 
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 rounded-full text-white outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10'
        >
          Send 
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
}
