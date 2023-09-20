'use client';
import './styles.modules.css';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons you want to use
import Image from 'next/image';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
  <div className="navbar navbar-sticky">
	<div className="navbar-start">
		<a className="navbar-item">Ripple UI</a>
	</div>
	<div className="navbar-center invisible md:block md:visible">
		<a className="navbar-item">Home</a>
		<a className="navbar-item">About</a>
		<a className="navbar-item">Contact</a>
	</div>
  <div className="navbar-center   visible  md:invisible">
    <div className="dropdown text-center flex">
    <label className="btn btn-solid-primary my-2 bg-green-400" tabIndex={0}><FaBars className="text-green-500"/></label>
    <div className="dropdown-menu justify-center self-center items-center">
      <a className="dropdown-item text-center text-sm">Home</a>
      <a tabIndex={-1} className="dropdown-item text-center text-sm">About</a>
      <a tabIndex={-1} className="dropdown-item text-center text-sm">Contact</a>
      <button className="btn btn-success w-20  hover:bg-green-700">login</button>
  <button className="btn mt-2 btn-success w-20  hover:bg-green-700">signup</button>
	</div>
</div>
	</div>
	<div className="navbar-end pr-20 mr-10 invisible md:visible ">
  <button className="btn btn-success hover:bg-green-700">login</button>
  <button className="btn btn-success hover:bg-green-700">signup</button>
	</div> 
 
</div>
  
  );
};

export default Navbar;
