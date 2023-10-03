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
    }, 50); // Replace 2000 with your desired delay in milliseconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="spinner-circle w-32 h-32 border-t-4 border-green-500 border-solid rounded-full a">

        <style>
        {`
          .spinner-circle {
            
            --spinner-color: green;
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