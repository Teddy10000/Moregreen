<<<<<<< HEAD
import { Oswald, Raleway, Roboto } from 'next/font/google';
import Image from 'next/image';
import image from '../images/backgroud-soccer.jpg'
import image2 from '../images/boy.png'

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
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
  <div className="flex items-center justify-center text-center mt-80">
    <div className="rounded-md shadow-md bg-gray-900 backdrop-filter:blur">
      <h1 className="text-6xl text-green-600">Welcome to More Greens</h1>
     <p className="text-2xl mt-5 text-white">Your number one way to financial freedom</p> 
     <button className="btn btn-success mt-5 mb-5">Subscribe</button>
    </div>
   
  </div>
</div>
    
  </div>
</div>

  );
};

export default HeroMain;
=======
import { Oswald, Raleway, Roboto } from 'next/font/google';
import Image from 'next/image';
import image from '../images/backgroud-soccer.jpg'
import image2 from '../images/boy.png'

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
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
  <div className="flex items-center justify-center text-center mt-80">
    <div className="rounded-md shadow-md bg-gray-900 backdrop-filter:blur">
      <h1 className="text-6xl text-green-600">Welcome to More Greens</h1>
     <p className="text-2xl mt-5 text-white">Your number one way to financial freedom</p> 
     <button className="btn btn-success mt-5 mb-5">Subscribe</button>
    </div>
   
  </div>
</div>
    
  </div>
</div>

  );
};

export default HeroMain;
>>>>>>> frontend-setup
