import React from 'react'

export default function FilterButton(){
    return (
        <>
            {/* selected button */}
            <button className="bg-orange-300 text-blue-300 font-bold text-xl rounded-sm pl-3 pr-9 py-0.5 bg-[url('../assets/filter-minus.svg')] bg-no-repeat bg-[center_right_0.75rem] tracking-wider">Vodka</button>

            {/* non-selected button */}
            <button className="bg-blue-100 text-gray-300 font-bold text-xl rounded-sm pl-3 pr-9 py-0.5 bg-[url('../assets/filter-plus.svg')] bg-no-repeat bg-[center_right_0.75rem] tracking-wider">Rum</button>
        </>
    )
}