import React from 'react'
import FilterButton from './FilterButton'

export default function MoreFiltersModal(props){


    const filterBtnArray = props.otherIngredients.map((ingredient, index) => {
        return (
            <FilterButton
                key={index} 
                name={ingredient} 
                bgColor={props.bgColor}
                filterCategory={props.filterCategory}
                filterState={props.filterState} 
                handleFilterSelect={props.handleFilterSelect}
            />
        )
    })

    return(
        <div className="fixed inset-0 bg-[rgba(0_0_0/0.5)] z-20">
            <div className="bg-blue-300 absolute inset-x-5 inset-y-20 flex flex-col items-center px-4 py-6 justify-between rounded-sm shadow-[0_0_30px_rgba(0_0_0/0.5)]">
                <h2 className={`text-xl tracking-wider mb-6 ${props.titleColor}`}>{`More ${props.filterCategory}`}</h2>
                <div className="h-full w-full overflow-y-scroll">
                    <div className="flex flex-wrap gap-4 w-full">
                        { filterBtnArray }
                    </div>
                </div>
                <button onClick={props.handleModalClose} className="bg-blue-300 text-gray-300 font-bold w-full rounded-sm py-2 border-2 border-[rgba(255_255_255/0.06)] uppercase tracking-wider justify-self-end drop-shadow-xl">Done</button>
            </div>
        </div>
    )
}