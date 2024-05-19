import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import BrowseJobs from '../components/BrowseJobs'

const Homepage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListing />
        <BrowseJobs />
    </>
  )
}

export default Homepage