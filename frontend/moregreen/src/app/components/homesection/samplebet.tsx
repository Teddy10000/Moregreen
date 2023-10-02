
'use client'

import {useState, useEffect} from 'react';
import Image from 'next/image';

import { useData } from '../../../../sanity/DataContext';
import formatDateTime from './dateformating';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
 
  variable:'--font-raleway',
})

export default function Samplebet(){
	
  const [isTableVisible, setTableVisible] = useState(false);
  const { bettingData, isLoading } = useData();
	const toggleTable = () => {
	  setTableVisible(!isTableVisible);
	};
  const [bets, setBets] = useState([]);
  
 // The empty dependency array ensures the effect runs once after the initial render
  interface Bet {
    _id: string;
    _createdAt: string;
    datetime: string;
    teams: {
      team1: string;
      team2: string;
      league: string;
    };
    prediction: string;
    outcome: boolean;
    matchstart: boolean;
    Freebet: boolean;
  }
  const freebetYesRows: Bet[] = bettingData.filter((item: Bet) => item.Freebet);
  if (isLoading) {
    return <p>Loading...</p>; // Display a loading indicator
  }

  // Now you can safely access bettingData because isLoading is false

    return(
        <div className="container mx-auto md:p-0 p-4">
            <p className={`text-4xl font-bold mt-4 mb-2 ${raleway.className}`}> Some sample life bet </p>
            <button
        className="btn btn-success flex self-center justify-center  hover:bg-green-700 text-white px-3 py-2 rounded-md focus:outline-none"
        onClick={toggleTable}
      >
        {isTableVisible ? 'Hide Table' : 'Show some sample bets'}
        {isTableVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block ml-1 transform -rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
            <div className="flex w-full flex-col overflow-x-auto">


      {isTableVisible && (
        <table className="table-zebra table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Date</th>
              <th>Teams</th>
              <th>Tips</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {freebetYesRows.map((item, index) => (
      <tr key={index}>
        <th>{index + 1}</th>
        <td className="text-center  " style={{ whiteSpace: 'nowrap' }}>
            <div className="flex flex-col flex-wrap">
        {formatDateTime(item.datetime)}
  </div>
          </td>

        <td><span className="font-bold">{item.teams.team1}</span> vs <span className='font-bold'>{item.teams.team2}</span></td>
        <td>{item.prediction}</td>
        <td>
              {item.outcome === true ? (
          <FaCheck className="text-green-500"/>
        ) : item.outcome === false ? (
          <FaTimes className="text-red-500"/>
        ) : (
          'N/A'
  )}
</td>
      </tr>
    ))}
          </tbody>
        </table>)}
		</div>
		<div className="flex justify-center">
			<button className="btn mb-8 btn-success hover:bg-green-700 mt-5 text-center justify-center self-center">Visit for more bets</button>
			</div>
		</div> 
		
    )

}