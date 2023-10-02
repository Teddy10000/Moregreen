'use client'

import {useState, useEffect} from 'react';

import { Oswald, Raleway, Roboto } from 'next/font/google';
import Image from 'next/image';
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
import { getProjects } from '../../../../sanity/sanity-utils';
const BettingAdviceSection: React.FC = () => {

  return (
    <section className="md:bg-green-500 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center">
        {/* Image with Background Removed (Left) */}
        <div className=" invisible md:visible md:w-1/2 mb-8">
          <Image
            src="/your-image.jpg" // Replace with your image
            alt="Betting Advice" 
            width={300}
             height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Betting Advice Text (Right) */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-left">
          <motion.h2 
          className={`text-4xl text-green-700 ${raleway.className} font-bold mb-4`}>Betting Advice</motion.h2>
          <motion.p className="text-xl text-gray-800">
            Whether you are a novice or experienced bettor, here are some key tips to enhance your betting strategy:
            Do not try if you are not 18 years of old.  
          </motion.p>
          <ul className="mt-4 text-lg">
            <motion.li 
              variants={fadeIn('down',0.3)}
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:true, amount:0.5}}
            className="mb-2">
              <span className="text-green-600 font-semibold">1. Research:</span> Analyze and edit some of the betting stakes to make maximum impact of our bet.
            </motion.li>
            <motion.li 
              variants={fadeIn('down',0.3)}
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:true, amount:0.5}}
            className="mb-2">
              <span className="text-green-600 font-semibold">2. Bankroll Management:</span> Set a budget and stick to it to avoid overspending.
            </motion.li>
            <motion.li 
              variants={fadeIn('down',0.3)}
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:true, amount:0.5}}
            className="mb-2">
              <span className="text-green-600 font-semibold">3. Diversify Bets:</span> Avoid putting all your money on one bet; diversify to spread the risk.
            </motion.li>
            <motion.li 
              variants={fadeIn('down',0.3)}
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:true, amount:0.5}}
            className="mb-2">
              <span className="text-green-600 font-semibold">4. Shop for Odds:</span> Compare odds from multiple bookmakers to get the best value.
            </motion.li>
            <motion.li 
              variants={fadeIn('down',0.3)}
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:true, amount:0.5}}
            className="mb-2">
              <span className="text-green-600 font-semibold">5. Stay Informed:</span> Keep up with sports news and updates for an edge in betting.
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BettingAdviceSection;

