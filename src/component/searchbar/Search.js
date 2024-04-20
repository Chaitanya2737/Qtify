import React from 'react'
import "./search.css"
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div  className='Wrapper'>
        <input className='inputsize' placeholder='Search a album of your choice' type="text" />
        <button className='button'> 
        <FaSearch />
        </button>
    </div>
  )
}

export default Search