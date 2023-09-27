
import BettingAdviceSection from "./components/homesection/advice";
import HeroMain from "./components/homesection/hero";
import Samplebet from "./components/homesection/samplebet";
import StatisticsSection from "./components/homesection/statistics";
import Footer from "./footer";





export default function Home() {
  return (
    
    <main className="h-screen w-full  ">
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


