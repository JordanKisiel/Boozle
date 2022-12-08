import React from 'react'
import DiscloseButton from './DiscloseButton'
import FilterButton from './FilterButton'
import FilterSearch from './FilterSearch'
import { motion, AnimatePresence } from "framer-motion"


export default function FilterSelect(props){
    
    const [isOpen, setIsOpen] = React.useState(false)

    function handleFilterOpen(){
        setIsOpen((prevValue) => !prevValue)
    }

    const filterBtnArray = props.defaultIngredients.map((ingredient, index) => {
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
            <div className="w-full rounded-sm overflow-hidden drop-shadow-xl md:w-3/4 lg:w-[48rem]">
                <DiscloseButton 
                    title={props.title} titleColor={props.titleColor}
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
                            className="bg-blue-300">
                            <div className="px-5 py-5 space-y-8">
                                <div className="flex flex-wrap gap-4">
                                    { filterBtnArray }
                                </div>
                                <div className="border-t-2 border-[rgba(255_255_255/0.08)] pt-4 pb-0 flex">
                                    <FilterSearch />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}