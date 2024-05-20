import React, { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'


const SingleJobListing = ({a}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let jobDescription = a.description;

    if(!showFullDescription){
        jobDescription = jobDescription.slice(0,95) + `...`;
    }
    
    return (
    <>
        <div className="bg-white rounded-xl shadow-md relative"> 
            <div className="p-4">

                <div className="mb-6">
                <div className="text-gray-600 my-2">{a.type}</div>
                <h3 className="text-xl font-bold">{a.title}</h3>
                </div>

                <div className="mb-5">
                {jobDescription}
                </div>

                <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={()=>setShowFullDescription(!showFullDescription)}> {showFullDescription ? `less`: `more`}</button>

                <h3 className="text-indigo-500 mb-2">{a.salary}</h3>
                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                    <FaMapMarker className='inline text-lg mb-1'/>
                    {a.location}
                </div>
                <a className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" href=""> Read More </a>
                </div>

            </div>
        </div>
    </>
  )
}

export default SingleJobListing