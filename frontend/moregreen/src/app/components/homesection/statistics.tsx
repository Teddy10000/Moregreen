'use client'
import Image from 'next/image';
import React from 'react';
import { Abel, Raleway, Roboto } from 'next/font/google';
import { FaHome, FaUsers, FaMoneyBillAlt, FaHandPaper } from 'react-icons/fa';


import { fadeIn ,fadeInRight,} from './variants';
import { motion } from 'framer-motion';
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
const StatisticsSection: React.FC = () => {
  return (
    <section className="relative">
    {/* Background Image */}
    <div className="w-full h-[800px] sm:h-[400px] md:h-80 lg:h-96 relative">
      <Image
        src={""}
        alt="Image"
        layout="fill"
        objectFit="cover" 
      
      />
    </div>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    
    {/* Content Overlay */}
    <div className="absolute top-0 left-0 w-[100hv]  md:w-full h-full p-4 ">
      <div className={`container mx-auto text-white pt-16 font-bold ${raleway.className}`}>
        <h2 className={`text-5xl md:text-6xl  font-semibold mb-8 ${roboto.className} text-green-600`}><span className="text-black">Our</span> Achievements</h2>
        <div className="grid grid-cols-1 text-green-600 sm:grid-cols-3 gap-8 text-center">
          <motion.div 
            variants={fadeIn('down',0.3)}
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.5}}
          className="p-6 bg-white text-green-600  rounded-lg shadow-md">
            <div className="text-4xl mb-2">
              <FaHandPaper />
            </div>
            <p className="text-2xl font-semibold mb-2">1,000+</p>
            <p className="text-lg">Bet Slips Won</p>
          </motion.div>
          <motion.div 
            variants={fadeIn('down',0.3)}
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.4}}
          className="p-6 bg-white rounded-lg  shadow-md">
            <div className="text-4xl mb-2">
              <FaUsers />
            </div>
            <p className="text-2xl font-semibold mb-2">500+</p>
            <p className="text-lg">Happy Customers</p>
          </motion.div>
          <motion.div
            variants={fadeIn('down',0.3)}
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.4}}
          className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-2">
              <FaMoneyBillAlt />
            </div>
            <p className="text-2xl font-semibold mb-2">$100,000+</p>
            <p className="text-lg">Cash Made</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default StatisticsSection;
