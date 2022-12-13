import React from 'react'

export default function ClearFiltersModal(props){
    return (
        <div className="fixed inset-0 bg-[rgba(0_0_0/0.5)] z-20">
            <div className="bg-blue-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-2/3 py-8 gap-4 rounded-sm shadow-[0_0_30px_rgba(0_0_0/0.5)]">
                <h2 className="text-xl tracking-wider text-gray-300 mb-8">Clear all filters?</h2>
                <button 
                    onClick={() => {
                        props.handleClearFilters() 
                        props.handleClearModalClose()
                    }}
                    className="bg-blue-600 text-gray-300 uppercase font-bold w-3/5 py-3 text-lg tracking-wider bg-[url('../assets/check-mark.svg')] bg-no-repeat bg-[center_left_1.1rem]">Yes</button>
                <button onClick={props.handleClearModalClose} className="bg-blue-600 text-gray-300 uppercase font-bold w-3/5 py-3 text-lg tracking-wider bg-[url('../assets/choose-no-x.svg')] bg-no-repeat bg-[center_left_1.1rem]">No</button>
            </div>
        </div>
    )
}