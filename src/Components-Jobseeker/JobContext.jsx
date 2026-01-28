import React, { createContext, useState } from 'react';
 
export const JobContext = createContext();
 
export const JobProvider = ({ children }) => {
 
    const [appliedJobs, setAppliedJobs] = useState([]);
 
    const addToApplied = (job) => {
        setAppliedJobs((prev) => {
           
            const isAlreadyApplied = prev.some((item) => item.id === job.id);
 
            if (isAlreadyApplied) {
                alert("You have already applied for this job!");
                return prev;
            }
 
           
            return [...prev, job];
        });
    };
 
    return (
        <JobContext.Provider value={{ appliedJobs, setAppliedJobs ,addToApplied}}>
            {children}
        </JobContext.Provider>
    );
};
 