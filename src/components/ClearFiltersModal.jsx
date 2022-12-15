import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function ClearFiltersModal(props){
    return (
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
            className="fixed inset-0 bg-[rgba(0_0_0/0.5)] z-20 flex flex-col items-center justify-center"
        >
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
                className="bg-blue-300 flex flex-col items-center justify-center w-2/3 h-1/3 py-8 gap-4 rounded-sm shadow-[0_0_30px_rgba(0_0_0/0.5)] max-w-[20rem]"
            >
                <h2 className="text-xl tracking-wider text-gray-300 mb-8">Clear all filters?</h2>
                <button 
                    onClick={() => {
                        props.handleClearFilters() 
                        props.handleClearModalClose()
                    }}
                    className="bg-blue-600 text-gray-300 uppercase font-bold w-3/5 py-3 text-lg tracking-wider bg-[url('/check-mark.svg')] bg-no-repeat bg-[center_left_1.1rem]">Yes</button>
                <button onClick={props.handleClearModalClose} className="bg-blue-600 text-gray-300 uppercase font-bold w-3/5 py-3 text-lg tracking-wider bg-[url('/choose-no-x.svg')] bg-no-repeat bg-[center_left_1.1rem]">No</button>
            </motion.div>
        </motion.div>
    )
}