import React from 'react'
import { useState } from 'react';

const Search = ({ searchId, setSearchId }) => {
  return (
    <div className='my-3 flex gap-3 items-center'>
      <label className='font-bold'>Search product by ID:</label>
      <input value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Enter the product id" className='bg-white px-2 py-1 m-2 rounded-md' />
    </div>
  )
}

export default Search