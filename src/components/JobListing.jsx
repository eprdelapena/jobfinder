import React from 'react'
import jobs from '../jobs.json'
import SingleJobListing from './SingleJobListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const JobListing = ({toShow=false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try{
        let apiURL = "https://eprdelapena.github.io/jobdata/jobs.json";
        const request = await fetch(apiURL, {
          method: 'GET'
        })
        const response = await request.json();
        if(!toShow){
          setJobs(response.slice(0,3));
        }
        else if(toShow){
          setJobs(response);
        }
        
      }
      catch(error){
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {toShow ? "React Jobs": "Recent Jobs"} 
                </h2>
                  {loading ? (<Spinner loading={loading} />) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {jobs.map((name, index) => (
                    <SingleJobListing key={index} a={name}/>
                  ))} </div>)}              
            </div>
        </section>    
    </>
  )
}

export default JobListing