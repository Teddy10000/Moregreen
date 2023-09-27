'use client'
import './globals.css'
import Navbar from './navbar';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next' 
import { DataProvider } from '../../sanity/DataContext';
import { Inter } from 'next/font/google' ;
import  {Roboto} from 'next/font/google';
import { Blaka_Hollow } from 'next/font/google';

import AuthProvider from './context/AuthProvider';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (you can replace this with your actual loading logic)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Replace 2000 with your desired delay in milliseconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        {loading ? (
          <div className="flex justify-center self-center content-center w-full h-full">
          <div className="spinner-dot-circle w-[200px] h-[980px]">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <style>
        {`
          .spinner-dot-circle {
            
            width: 300px;
            height: 300px;
            color:green;
            
          }
        `}
      </style>
        </div>
        </div>

        ) : ( 
          <>
          
            <AuthProvider> 
            <DataProvider>
            <Navbar />
            {children}
            </DataProvider>

            </AuthProvider>
          </>
        )}
      </body>
    </html>
  );
        }