import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getProjects } from './sanity-utils'; // Update with your actual path

interface DataContextProps {
  children: ReactNode;
}

interface BetData {
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

interface DataContextValue {
  bettingData: BetData[];
  isLoading: boolean;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export function DataProvider({ children }: DataContextProps) {
  const [bettingData, setBettingData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setBettingData(projectsData);
       
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    // Call the async function to fetch projects
    fetchProjects(); 

  }, []);

  return (
    <DataContext.Provider value={{ bettingData, isLoading }}>
        
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
