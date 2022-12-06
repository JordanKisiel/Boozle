import React from 'react'

export default function ClearFiltersButton(){
    return (
        <button className="hidden bg-blue-300 text-gray-600 tracking-widest uppercase rounded-full py-1 pl-9 pr-4 bg-[url('../assets/clear-all-x.svg')] bg-no-repeat bg-[center_left_1rem] border-[rgba(255_255_255/0.1)] border-[1px] mt-8">
            Clear All
        </button>
    )
}