import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBan } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-green-600 to- bg-green-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">MoreGreen Betting</h2>
          <p className="mt-2 text-sm">Your destination for winning bets.</p>
        </div>
        <div className="mt-6 md:mt-0 flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-green-400"
            title="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="hover:text-green-400"
            title="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-green-400"
            title="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="hover:text-green-400"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="flex justify-center content-center">
      <div className="bg-red-500 text-black py-4 text-center w-full ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaBan size={24} />
            <p className="text-sm">Donnot bet if you are under 18.</p>
          </div>
          </div>
        </div>
      </div>
       <hr className="my-6 border-white" />

      <div className="container mx-auto text-center text-sm">
        <p>&copy; Sky-Tech Inc {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
