import React from 'react'

export default function FilterSearch(props){

    /* TODO:
        -change search to an MoreFiltersButton that opens a modal that displays the rest of the possible ingredients
        -optionally add the ability to filter the filter buttons in this modal using a search
     */

    return (
        <>
            <input className="bg-blue-600 text-gray-300 py-2 px-3 tracking-wider rounded-l-sm w-full placeholder:text-gray-600 focus:bg-blue-900 focus:outline-none" type="text" placeholder="Search for more..." />
            <button className="text-transparent bg-blue-100 w-1/3 rounded-r-sm bg-[url('/filter-plus.svg')] bg-no-repeat bg-center sm:w-1/4 md:w-1/6 lg:w-24">Add</button>
        </>
    )
}