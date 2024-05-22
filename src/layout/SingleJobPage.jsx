import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { deleteData } from '../function/deletedata';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleJobPage = () => {
  let params = useParams().profileID;
  const [jobs, setJobs] = useState([]);
  const apiURL = `http://localhost:8000/jobs/${params}`;
  const navigate = useNavigate();
  const deletes = () => { 
    deleteData(apiURL).then(() => {
      console.log("Data Deleted");
    })
    return navigate('/jobs');
  }

  useEffect(() => {
    const fetchJobs = async () => {
        try{
            const request = await fetch(apiURL, {
                method: 'GET'
            });
            const response = await request.json();
            setJobs(response);
        }
        catch(error){
            console.error(error);
        }
    }
    fetchJobs();
  })

  return (
    <>
    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4"> {jobs.type} </div>
              <h1 className="text-3xl font-bold mb-4">
                {jobs.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700"> <FaMapMarker className='inline text-lg mb-1'/> {jobs.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               {jobs.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{jobs.salary}</p>
            </div>
          </main>

          <aside>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl"> {jobs.company && jobs.company.name} </h2>

              <p className="my-2">
              {jobs.company && jobs.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {jobs.company && jobs.company.contactEmail}
              </p>

              <h3 className="text-xl">{jobs.company && jobs.company.contactPhone}</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link to={`/editjob/${params}`} className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"> Edit Job </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                onClick={deletes}
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </>
  )
}

export default SingleJobPage