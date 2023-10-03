

'use client';
import { usePathname ,useRouter } from 'next/navigation'; 
import { useSession } from 'next-auth/react';
import './styles.modules.css';
import { useState } from 'react';
import { signOut,signIn } from 'next-auth/react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons you want to use
import Image from 'next/image';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const {status,data:session} = useSession(); 
  const route = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isAdmin = pathname.startsWith('/admin')

  return (
   <>
        {!isAdmin && (<div>
        <div className="navbar navbar-sticky z-40">
          <div className="navbar-start">
            <a href='/' className="navbar-item text-green-400 hover:text-green-800 " style={{ color: 'green' }}>MoreGreeen</a>
          </div>
          <div className="navbar-center invisible md:block md:visible">
            <a href="/predictions" className="navbar-item text-green-800 hover:underline" style={{ color: 'green',transition: 'color 0.3s', }}>Predictions
            
            </a>
            <a href="/about" className="navbar-item text-green-800 hover:underline" style={{ color: 'green' }}>About</a>
            <a href="/contact"  className="navbar-item text-green-800 hover:underline" style={{ color: 'green' }}>Contact</a>
          </div>
        <div   className="navbar-center   visible  md:hidden">
        <div
              style={{
                 
              }} className="dropdown mr-60  custom-margin text-center flex">
          <label  className="btn btn-solid-primary my-2 bg-green-400" tabIndex={0}><FaBars className="text-green-500"/></label>
          <div className="dropdown-menu justify-center bg-black self-center items-center" style={{ backgroundColor: 'black', color: 'green' }}>
            <a href="/predictions" className="dropdown-item text-center text-sm" style={{ color: 'green' }} >Predictions</a>
            <a href="/about" tabIndex={-1} className="dropdown-item text-center text-sm" style={{ color: 'green' }}>About</a>
            <a href="/contact" tabIndex={-1} className="dropdown-item text-center text-sm" style={{ color: 'green' }}>Contact</a>
            {status == 'authenticated' ? <button onClick={()=>signOut()} className="btn btn-success hover:bg-green-700">signout</button> : (
        <>
        <button  onClick={()=>route.push('/signin')} className="btn btn-success mb-3 hover:bg-green-700">login</button>
        <button  onClick={()=>route.push('/signin')} className="btn btn-success hover:bg-green-700">signup</button>
        </>
        )}
        </div>
      </div>
        </div>
        <div className="navbar-end pr-20 mr-10 invisible md:visible "> 
        {status == 'authenticated' ? <> <button onClick={()=>signOut()} className="btn btn-success hover:bg-green-700">signout</button> 
        <div className="avatar">
        <Image width={40} height={40} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" /> 
        
      </div><p>{session?.user?.name}</p> </>
        : (
        <>
         <button  onClick={()=>route.push('/signin')} className="btn btn-success hover:bg-green-700">login</button>
         <button  onClick={()=>route.push('/signin')} className="btn btn-success hover:bg-green-700">signup</button>
        </>
        )}
        </div> 
      
      </div> 
      
      
      </div> )}
      </> 
  
  );
};

export default Navbar;

