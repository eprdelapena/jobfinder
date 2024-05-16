import React from 'react'

const Cards = ({ children, bg='bg-gray-100' }) => {
  return ( // when using props dont capitalize
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Cards