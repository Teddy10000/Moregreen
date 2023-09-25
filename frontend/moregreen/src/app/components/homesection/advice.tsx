import Image from 'next/image';
import React from 'react';

const BettingAdviceSection: React.FC = () => {
  return (
    <section className="bg-green-500 py-16">
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
          <h2 className="text-3xl font-bold mb-4">Betting Advice</h2>
          <p className="text-lg text-gray-800">
            Whether you're a novice or experienced bettor, here are some key tips to enhance your betting strategy:
          </p>
          <ul className="mt-4">
            <li className="mb-2">
              <span className="text-green-600 font-semibold">1. Research:</span> Analyze team stats, recent performance, and injury reports to make informed bets.
            </li>
            <li className="mb-2">
              <span className="text-green-600 font-semibold">2. Bankroll Management:</span> Set a budget and stick to it to avoid overspending.
            </li>
            <li className="mb-2">
              <span className="text-green-600 font-semibold">3. Diversify Bets:</span> Avoid putting all your money on one bet; diversify to spread the risk.
            </li>
            <li className="mb-2">
              <span className="text-green-600 font-semibold">4. Shop for Odds:</span> Compare odds from multiple bookmakers to get the best value.
            </li>
            <li className="mb-2">
              <span className="text-green-600 font-semibold">5. Stay Informed:</span> Keep up with sports news and updates for an edge in betting.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BettingAdviceSection;
