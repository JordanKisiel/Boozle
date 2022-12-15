import React from 'react'
import ClearFiltersButton from './ClearFiltersButton'
import ClearFiltersModal from './ClearFiltersModal'
import FilterSelect from './FilterSelect'
import InfoDisplay from './InfoDisplay'
import filterData from '../data/filter.config.json'
import { motion, AnimatePresence } from "framer-motion"

//custom Framer Motion components
const MotionInfoDisplay = motion(InfoDisplay)
const MotionFilterSelect = motion(FilterSelect)
const MotionClearFiltersButton = motion(ClearFiltersButton)

const FilterScreen = React.forwardRef((props, ref) => {

    const [isClearModalOpen, setIsClearModalOpen] = React.useState(false)

    function handleClearModalOpen(){
        setIsClearModalOpen(true)
    }

    function handleClearModalClose(){
        setIsClearModalOpen(false)
    }

    const filterSelectArray = filterData.filters.map((filter, index) => {
        return (
            <MotionFilterSelect
                key={index} 
                title={filter.title}  
                titleColor={filter.titleColor}
                bgColor={filter.bgColor} 
                defaultIngredients={filter.defaultIngredients}
                otherIngredients={filter.otherIngredients}
                filterState={props.filterState}
                handleFilterSelect={props.handleFilterSelect}
                variants={props.childAnim} 
            />
        )
    })

    return (
        <div ref={ref} className="flex flex-col gap-6 items-center w-full">
            <MotionInfoDisplay 
                displayState={props.displayState} 
                sortedResultIDs={props.sortedResultIDs} 
                variants={props.childAnim}
            />
            { filterSelectArray }
            <MotionClearFiltersButton handleClearModalOpen={handleClearModalOpen} variants={props.childAnim} />
            <AnimatePresence>
                { isClearModalOpen && <ClearFiltersModal handleClearModalClose={handleClearModalClose} handleClearFilters={props.handleClearFilters} /> }
            </AnimatePresence>
        </div>
    )
})

export default FilterScreen