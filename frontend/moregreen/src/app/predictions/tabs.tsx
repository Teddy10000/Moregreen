'use client'

import { useState } from "react";
import { BsListTask } from "react-icons/bs"; 
import { MdTaskAlt } from "react-icons/md";
import PreviousTable from "./previousbettable";
import LiveTable from "./livebet";
export default function Tabs(){

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex: number): void => {
        setActiveTab(tabIndex);
      };

    return (
        <>
        <div className="flex flex-col ">
        <div className="flex-col flex md:flex-row p-4  md:ml-0 font-bold text-3xl md:text-5xl justify-center md:self-center">
            See our biggest predictions that will make you.
        </div>
         
       
        <div className="">
        <div className=" py-8">
      <div className="  ">
        <div className="tabs w-[100vh]">
        <style>
            {`
          .tab-toggle:checked+.tab {
            --tw-border-opacity: 1;
            --tw-text-opacity: 1;
            border-bottom-color: green;
            color: green;
        }
        .tabs-underline .tab-toggle+.tab {
            padding-bottom: .5rem/* 8px */;
            position: relative;
        }
        .tabs-underline .tab-toggle:checked+.tab:before {
            --tw-bg-opacity: 1;
            --tw-content: "";
            background-color: rgb(var(--primary)/var(--tw-bg-opacity));
            bottom: 0;
            content: var(--tw-content);
            height: .125rem/* 2px */;
            left: 0;
            position: absolute;
            transition: transform .3s ease;
            width: 100%;
            z-index: 10;
        }
        .tab-toggle:checked+.tab.tab-pill,.tabs-boxed .tab-toggle:checked+.tab {
            --tw-bg-opacity: 1;
            --tw-text-opacity: 1;
            background-color: rgb(var(--gray-5)/var(--tw-bg-opacity));
            color: rgb(var(--content1)/var(--tw-text-opacity));
        }
        .tab-toggle:checked+.tab.tab-pill,.tabs-boxed .tab-toggle:checked+.tab {
            --tw-bg-opacity: 1;
            --tw-text-opacity: 1;
            background-color: rgb(var(--gray-5)/var(--tw-bg-opacity));
            color: rgb(var(--content1)/var(--tw-text-opacity));
        }
        `}
            </style>
          <input
            type="radio"
            id="tab-1"
            name="tabs"
            className="tab-toggle hidden"
            checked={activeTab === 0}
            onChange={() => handleTabClick(0)}
          
          />
            
         
          <label htmlFor="tab-1" style ={{ transition: 'color 0.3s',}} className={`tab w-1/3 md:text-xl bg-black tab-bordered px-6 cursor-pointer ${activeTab === 0 }`}>
             Live Bets <MdTaskAlt className='text-x ml-1 mt-[2px]'/>
          </label>

          <input
            type="radio"
            id="tab-2"
            name="tabs"
            className="tab-toggle hidden"
            checked={activeTab === 1}
            onChange={() => handleTabClick(1)}
          />
          <label htmlFor="tab-2" className={`tab w-1/3 md:text-xl tab-bordered px-6 cursor-pointer bg-black ${activeTab === 1 ? 'text-green-600 border-b-2 border-green-600' : ''}`}>
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
          <label htmlFor="tab-3" className={`tab w-1/3 md:text-xl tab-bordered px-6 cursor-pointer bg-black  ${activeTab === 2 ? 'text-green-600 border-b-2 border-green-600' : ''}`}>
              Won bets <BsListTask className=' ml-1 mt-[1px]'/>
          </label>
        </div>

        <div className="mt-4">
          <div className="tab-content">
            {activeTab === 0 && <LiveTable/> }
            {activeTab === 1 && <PreviousTable/>}
            {activeTab === 2 && <PreviousTable/>}
          </div>
        </div>
      </div>
    </div>
        </div>






        </div>

        </>
    )
}