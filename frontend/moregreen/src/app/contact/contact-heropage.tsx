'use client'
import React from 'react';
import Image  from 'next/image'; 

import { Abel, Raleway, Roboto } from 'next/font/google';
import { fadeIn ,fadeInRight,} from '../components/homesection/variants';
import { motion } from 'framer-motion';
motion
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const ContactHeroSection = () => {
  return (
    <div className="relative -z-20 h-screen md:h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={""} // Replace with the actual path to your image
          alt="Designed by Freepik"
          objectFit="cover"
          layout='fill'
          className=''
        />
        <div className="bg-green-200 opacity-70 absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <motion.h1 
         variants={fadeIn('down',0.3)}
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount:0.4}}
        className={`text-6xl font-bold ${roboto.className} md:text-6xl text-black font-bold mb-4 text-center`}>
         <span className="text-green-600"> Contact</span> Us
        </motion.h1>
        <motion.p 
         variants={fadeIn('up',0.3)}
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount:0.4}}
        className={`text-lg ${raleway.className}  md:text-2xl text-center`}>
          We'd love to hear from you. Feel free to get in touch with us!
        </motion.p>
      </div>
    </div>
  );
};

export default ContactHeroSection;
