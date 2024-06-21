// import React from 'react'
import { IoMdSearch } from "react-icons/io"

const SearchBar = () => {
  return (
    <div className="relative group hidden sm:block">
        <input type="text" placeholder="Search"
            className="
                search-bar
            "
        />
        <IoMdSearch 
            className=" text-xl text-gray-600 dark:text-gray-400
            absolute top-1/2 -translate-y-1/2 right-3
            group-hover:text-primary duration-200"
        />
    </div>
  )
}

export default SearchBar