import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-500">Welcome to MoreGreen Betting</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your source for expert sports predictions and free betting tips.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Expert Predictions</h3>
            <p className="text-gray-600">
              Get access to our team&apos;s expert predictions for upcoming sports events for free.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">High Odds</h3>
            <p className="text-gray-600">
              We offer free betting tips with high odds to increase your chances of winning big.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">No Subscription Required</h3>
            <p className="text-gray-600">
              Enjoy all our tips and services for free, no subscription needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
