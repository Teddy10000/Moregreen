'use client'
import { Oswald, Raleway, Roboto } from 'next/font/google';
import Image from 'next/image';
import image from '../images/backgroud-soccer.jpg'
import image2 from '../images/boy.png'
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],

  variable:'--font-roboto',
})
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
 
  variable:'--font-raleway',
})

const HeroMain = () => {
  return (
<div className="relative h-full">
  {/* Background Image */}
  <Image
    src={image}
    alt="Window Cleaning"
    layout="fill"
    objectFit="cover"
  />

  {/* Text Content */}
  <div className="absolute p-4 inset-0 flex flex-col ">
  <div className="relative flex flex-col justify-center items-center">
  {/* Your content for the left side */}
  <div className="flex items-center justify-center text-center mt-48 md:mt-80">
    <div className="rounded-md shadow-md bg-gray-900 backdrop-filter:blur">
      <motion.h1 
        variants={fadeIn('down',0.3)}
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:true, amount:0.5}}
      className={`text-6xl text-green-600 ${raleway.className}`}>Welcome to More Greens</motion.h1>
     <motion.p 
       variants={fadeIn('up',0.3)}
       initial="hidden" 
       whileInView={'show'} 
       viewport={{once:true, amount:0.5}}
     className={`text-2xl mt-5 text-white ${roboto.className}`}>Your number one way to financial freedom</motion.p> 
     <button className="btn animate-bounce btn-success hover:text-green-700 mt-5 mb-5">Subscribe</button>
    </div>
   
  </div>
</div>
    
  </div>
</div>

  );
};

export default HeroMain;

