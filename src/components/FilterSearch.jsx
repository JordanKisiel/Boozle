import React from 'react'

export default function FilterSearch(){
    return (
        <>
            <input className="bg-blue-600 text-gray-600 py-2 px-3 tracking-wider rounded-l-sm w-full placeholder:text-gray-600" type="text" placeholder="Search for more..." />
            <button className="text-transparent bg-blue-100 w-1/3 rounded-r-sm bg-[url('../assets/filter-plus.svg')] bg-no-repeat bg-center sm:w-1/4 md:w-1/6 lg:w-24">Add</button>
        </>
    )
}