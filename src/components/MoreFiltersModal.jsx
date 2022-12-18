import React from 'react'
import FilterButton from './FilterButton'
import { motion, AnimatePresence } from "framer-motion"

export default function MoreFiltersModal(props){

    const sortedIngredients = props.otherIngredients.slice().sort()

    const filterBtnArray = sortedIngredients.map((ingredient) => {
        return (
            <FilterButton
                key={`${props.filterCategory}-${ingredient}`} 
                name={ingredient} 
                bgColor={props.bgColor}
                filterCategory={props.filterCategory}
                filterState={props.filterState} 
                handleFilterSelect={props.handleFilterSelect}
            />
        )
    })

    return(
        <motion.div 
            initial={
                {
                    opacity: 0
                }
            }
            animate={
                {
                    opacity: 1
                }
            }
            exit={
                {
                    opacity: 0
                }
            }
            transition={
                {
                    ease: "easeIn",
                    duration: 0.25
                }
            }
            className="fixed inset-0 bg-[rgba(0_0_0/0.5)] z-20 flex flex-col items-center justify-center">
            <motion.div 
                initial={
                    {
                        y: -100
                    }
                }
                animate={
                    {
                        y: 0
                    }
                }
                exit={
                    {
                        y: -100
                    }
                }
                transition={
                    {
                        ease: "easeInOut",
                        duration: 0.25
                    }
                }
                className="bg-blue-300 w-[90%] h-[80%] flex flex-col items-center px-4 py-6 justify-between rounded-sm shadow-[0_0_30px_rgba(0_0_0/0.5)]"
            >
                <h2 className={`text-xl tracking-wider mb-6 ${props.titleColor}`}>{`More ${props.filterCategory}`}</h2>
                <div className="h-full w-full overflow-y-scroll">
                    <div className="flex flex-wrap gap-4 w-full">
                        { filterBtnArray }
                    </div>
                </div>
                <button onClick={props.handleModalClose} className="bg-blue-300 text-gray-300 font-bold w-full rounded-sm py-2 border-2 border-[rgba(255_255_255/0.06)] uppercase tracking-wider justify-self-end drop-shadow-xl mt-6 max-w-[25rem]">Done</button>
            </motion.div>
        </motion.div>
    )
}