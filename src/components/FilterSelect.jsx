import React from 'react'
import DiscloseButton from './DiscloseButton'
import FilterButton from './FilterButton'
import MoreFiltersModal from './MoreFiltersModal'
import { motion, AnimatePresence } from "framer-motion"


const FilterSelect = React.forwardRef((props, ref) => {
    
    const [isOpen, setIsOpen] = React.useState(false)
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    function handleFilterOpen(){
        setIsOpen((prevValue) => !prevValue)
    }

    function handleModalOpen(){
        setIsModalOpen(true)
    }

    function handleModalClose(){
        setIsModalOpen(false)
    }

    const totalIngredients = [
        ...new Set(
            [
                ...props.defaultIngredients, 
                ...props.filterState.ingredients.filter(ingredient => props.otherIngredients.includes(ingredient))
            ]
        )
    ]
    const filterBtnArray = totalIngredients.map((ingredient, index) => {
        return (
            <FilterButton
                key={index} 
                name={ingredient} 
                bgColor={props.bgColor}
                filterCategory={props.title}
                filterState={props.filterState} 
                handleFilterSelect={props.handleFilterSelect}
            />
        )
    })

    return (
        <>
            <div ref={ref} className="w-full rounded-sm overflow-hidden drop-shadow-xl md:w-[25rem] lg:w-[30rem]">
                <DiscloseButton 
                    title={props.title} 
                    titleColor={props.titleColor}
                    isOpen={isOpen}
                    ingredients={[...props.defaultIngredients, ...props.otherIngredients]}
                    filterState={props.filterState}
                    handleFilterOpen={handleFilterOpen} 
                />
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: {height: "auto"},
                                collapsed: {height: 0}
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.04, 0.62, 0.23, 0.98]
                            }} 
                            className="bg-blue-300 w-full">
                            <div className="px-5 py-5 space-y-8 w-full">
                                <div className="flex flex-wrap gap-4 w-full">
                                    { filterBtnArray }
                                </div>
                                <div className="border-t-2 border-[rgba(255_255_255/0.08)] pt-4 pb-0 flex flex-row justify-center w-full">
                                    <button onClick={handleModalOpen} className="bg-blue-300 text-gray-300 font-bold w-full rounded-sm py-2 border-2 border-[rgba(255_255_255/0.06)] uppercase tracking-wider bg-[url(/filter-plus.svg)]  bg-no-repeat bg-[center_right_3rem] drop-shadow-xl max-w-[20rem]">More Options</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isModalOpen && 
                    <MoreFiltersModal 
                        otherIngredients={props.otherIngredients} 
                        bgColor={props.bgColor} 
                        titleColor={props.titleColor} 
                        filterCategory={props.title} 
                        filterState={props.filterState} 
                        handleFilterSelect={props.handleFilterSelect} 
                        handleModalClose={handleModalClose} 
                    />
                }
            </AnimatePresence>
        </>
    )
})

export default FilterSelect