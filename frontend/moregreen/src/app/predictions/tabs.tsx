import { useState } from "react";
import { BsListTask } from "react-icons/bs"; 
import { MdTaskAlt } from "react-icons/md";
export default function Tabs(){

    const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    return (
        <>
        <div className="flex flex-col sm:ml-[290px]">
        <div className="flex-col flex md:flex-row p-4 ml-10 md:ml-0 font-bold text-3xl md:text-5xl justify-center md:self-center">
          
        </div>
        <p className="font-bold w-40 ml-56 p-1 md:p-0 md:ml-4 mt-[-52px] md:mt-0 text-xl md:self-center bg-gray-400">Total Tasks: {tasklist.length}</p> 
       
        <div className="">
        <div className=" py-8">
      <div className=" w-full ">
        <div className="tabs w-full">
          <input
            type="radio"
            id="tab-1"
            name="tabs"
            className="tab-toggle hidden"
            checked={activeTab === 0}
            onChange={() => handleTabClick(0)}
          />
          <label htmlFor="tab-1" className={`tab w-1/3 md:text-xl  tab-bordered px-6 cursor-pointer ${activeTab === 0 ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
             Live Bets <MdTaskAlt className='text-xl ml-1 mt-[2px]'/>
          </label>

          <input
            type="radio"
            id="tab-2"
            name="tabs"
            className="tab-toggle hidden"
            checked={activeTab === 1}
            onChange={() => handleTabClick(1)}
          />
          <label htmlFor="tab-2" className={`tab w-1/3 md:text-xl tab-bordered px-6 cursor-pointer ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
            Previous Bets
          </label>

          <input
            type="radio"
            id="tab-3"
            name="tabs"
            className="tab-toggle hidden"
            checked={activeTab === 2}
            onChange={() => handleTabClick(2)}
          />
          <label htmlFor="tab-3" className={`tab w-1/3 md:text-xl md:mt-[-2px] tab-bordered px-6 cursor-pointer ${activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              Won bets <BsListTask className='text-xl md:text-3xl ml-2 mt-[1px]'/>
          </label>
        </div>

        <div className="mt-4">
          <div className="tab-content">
            {activeTab === 0 && <Tab1Content tasklist={tasklist} handleTaskSubmit={handleTaskSubmit} teamMembers={teamMembers} showModal={showModal} closeModal={closeModal} modalMessage={modalMessage} Added={Added}/>}
            {activeTab === 1 && <Tab2Content />}
            {activeTab === 2 && <Tab3Content />}
          </div>
        </div>
      </div>
    </div>
        </div>






        </div>

        </>
    )
}