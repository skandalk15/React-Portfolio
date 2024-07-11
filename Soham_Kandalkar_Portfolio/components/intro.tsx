'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {

    const {ref } = useSectionInView('Home',0.5);
    return (
    <section
    ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition = {{
                    type: 'tween',
                    duration : 0.2
                }}
                >
                    <Image src='/drl_prp.png' alt='Profile Picture' width="192" height='192' quality='95' priority={true}
                    className='w-28 h-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition = {{
                    type: 'spring',
                    stiffness : 125,
                    delay : 0.1,
                    duration : 0.7
                }}
                >👋🏼</motion.span>
            </div>
        </div>

        <motion.div className='text-center mt-6'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        >
            <h1 className='text-2xl sm:text-4xl font-bold'>Hello, I&apos;m Soham Prasad Kandalkar</h1>
            <p className='text-lg mt-3'>a versatile software engineer excelling in <span className='font-bold italic'>Backend development</span> and a <span className='font-bold italic'>Java enthusiast</span>.</p>
            <p className='text-lg mt-3'>With a knack for optimizing system performance and leading innovative projects, I thrive on creating scalable, efficient software. Outside of coding, I am passionate about continuous learning and embracing new challenges.</p>
        </motion.div>
        
        <motion.div className='mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition = {{
            delay: 0.1,
        }}
        >
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3
            flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
            hover:bg-gray-950 active:scale-105 transition'>Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            
            <a className='group bg-white px-7 py-3  text-gray-700
            flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
           active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10  dark:text-white/60' 
           href='https://drive.google.com/file/d/1rNis_lNSAkWEW_J4EZZrrFQGoJurNX8r/view' download={true} >Download CV<HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>
            
            <a className='bg-white p-4 text-gray-700
            flex items-center gap-2 rounded-full outline-none text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]
            hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' 
            href='https://www.linkedin.com/in/soham-kandalkar/' target='_blank'><BsLinkedin /></a>
            
            <a className='bg-white p-4 text-gray-700
            flex items-center gap-2 rounded-full outline-none text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] 
            hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
            href='https://github.com/skandalk15' target='_blank'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
