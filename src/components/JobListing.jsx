import React from 'react'
import jobs from '../jobs.json'
import SingleJobListing from './SingleJobListing'

const JobListing = ({toShow=false}) => {
  let recentJobs = jobs.slice(0,3);
  if(toShow){
    recentJobs = jobs;
  }
  return (
    <>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {toShow ? "React Jobs": "Recent Jobs"} 
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentJobs.map((name, index) => (
                    <SingleJobListing key={index} a={name}/>
                  ))}
                </div>
            </div>
        </section>    
    </>
  )
}

export default JobListing