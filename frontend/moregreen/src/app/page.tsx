
import BettingAdviceSection from "./components/homesection/advice";
import HeroMain from "./components/homesection/hero";
import Samplebet from "./components/homesection/samplebet";
import StatisticsSection from "./components/homesection/statistics";
import Footer from "./footer";
import { Oswald, Raleway, Roboto } from 'next/font/google';
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



export default function Home() {
  return (
    
    <main className={`h-screen w-full ${roboto.className} `}>
    <>
    
    <HeroMain/> 
    <BettingAdviceSection/> 
    <Samplebet/> 
    <StatisticsSection/> 
    <Footer/>
    

   
    </>
    
    </main>
   
  )
}


