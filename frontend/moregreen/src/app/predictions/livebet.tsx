import { useState,useEffect } from 'react';
import { getProjects } from '../../../sanity/sanity-utils';
import formatDateTime from '../components/homesection/dateformating';
import { FaCheck, FaTimes } from 'react-icons/fa'; 
import { useData } from '../../../sanity/DataContext';


export default function LiveTable(){
	
	
	const [bets, setBets] = useState([]);
	const {bettingData,isLoading} = useData();
	
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
	const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
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

	  if (isLoading) {
		return <p>Loading...</p>; // Display a loading indicator
	  }

	  const liveBets = bettingData.filter(bet => {
		const betDate = new Date(bet.datetime);
		return betDate >= today; // Compare with today's date
	  });
	  
    return (
        <div className="">
            <h1></h1>
          <div className="flex w-full overflow-x-auto">
	<table className="table-hover table">
		<thead>
			<tr>
				<th>Number</th>
				<th>Date</th>
				<th>Teams</th>
				<th>Tip</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
		{liveBets.map((item, index) => (
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
	</table>
	</div>  
        </div>
    )
}