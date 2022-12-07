import React from 'react'
import ClearFiltersButton from './ClearFiltersButton'
import ClearFiltersModal from './ClearFiltersModal'
import FilterSelect from './FilterSelect'
import InfoDisplay from './InfoDisplay'
import filterData from '../data/filter.config.json'



export default function FilterScreen(props){

    const filterSelectArray = filterData.filters.map((filter, index) => {
        return (
            <FilterSelect
                key={index} 
                title={filter.title}  
                titleColor={filter.titleColor}
                bgColor={filter.bgColor} 
                defaultIngredients={filter.defaultIngredients}
                otherIngredients={filter.otherIngredients}
                filterState={props.filterState}
                handleFilterSelect={props.handleFilterSelect} 
            />
        )
    })

    return (
        <>
            <InfoDisplay />
            { filterSelectArray }
            <ClearFiltersButton />
            { false && <ClearFiltersModal /> }
        </>
    )
}