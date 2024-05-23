'use client';
import React, { useState, createContext } from 'react'
import { SectionName } from '@/lib/types';


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectiontype = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLasClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectiontype | null>(null);

export default function ActiveSectionContextProvider({children} : ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection ] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLasClick] = useState<number>(0);
    
    return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLasClick,
    }}
    >{children}</ActiveSectionContext.Provider>
    );
}


export function useActiveSectionContext(){
    const context = React.useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context;
}