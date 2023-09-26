<<<<<<< HEAD
'use client'
import {useState} from 'react';

export default function Samplebet(){
	const [isTableVisible, setTableVisible] = useState(false);

	const toggleTable = () => {
	  setTableVisible(!isTableVisible);
	};

    return(
        <div className="container mx-auto">
            <p className="text-4xl font-bold mt-3 mb-2"> Some sample life bet </p>
            <div className="flex w-full flex-col overflow-x-auto">
			<button
        className="btn btn-success hover:bg-green-700 text-white px-3 py-2 rounded-md focus:outline-none"
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

      {isTableVisible && (
        <table className="table-zebra table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Teams</th>
              <th>Tips</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>)}
		</div>
		<div className="flex justify-center">
			<button className="btn btn-success hover:bg-green-700 mt-5 text-center justify-center self-center">Visit for more bets</button>
			</div>
		</div> 
		
    )
=======
export default function Samplebet(){


    return(
        <div className="container mx-auto">
            <p> Some sample life bet </p>
            <div className="flex w-full overflow-x-auto">
	<table className="table-zebra table">
		<thead>
			<tr>
				<th>Date</th>
				<th>Teams</th>
				<th>Tips</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>Cy Ganderton</td>
				<td>Quality Control Specialist</td>
				<td>Blue</td>
			</tr>
			<tr>
				<th>2</th>
				<td>Hart Hagerty</td>
				<td>Desktop Support Technician</td>
				<td>Purple</td>
			</tr>
			<tr>
				<th>3</th>
				<td>Brice Swyre</td>
				<td>Tax Accountant</td>
				<td>Red</td>
			</tr>
			<tr>
				<th>3</th>
				<td>Brice Swyre</td>
				<td>Tax Accountant</td>
				<td>Red</td>
			</tr>
			<tr>
				<th>3</th>
				<td>Brice Swyre</td>
				<td>Tax Accountant</td>
				<td>Red</td>
			</tr>
		</tbody>
	</table> 

</div>
<button className="btn btn-success">Login for more</button>
        </div>
    )
>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
}