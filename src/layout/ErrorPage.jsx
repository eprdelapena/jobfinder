import Errors from "../components/Errors"

import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListing from "../components/JobListing"
import BrowseJobs from "../components/BrowseJobs"

const ErrorPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListing />
        <BrowseJobs />
    </>
  )
}

export default ErrorPage
