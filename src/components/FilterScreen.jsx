import React from 'react'
import ClearFiltersButton from './ClearFiltersButton'
import ClearFiltersModal from './ClearFiltersModal'
import FilterSelect from './FilterSelect'
import InfoDisplay from './InfoDisplay'

export default function FilterScreen(){
    return (
        <>
            <InfoDisplay />
            <FilterSelect />
            <FilterSelect />
            <FilterSelect />
            <FilterSelect />
            <ClearFiltersButton />
            <ClearFiltersModal />
        </>
    )
}