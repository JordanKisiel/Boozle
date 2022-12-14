import React from 'react'
import SearchResults from './SearchResults'
import Recipe from './Recipe'
import FilterScreen from './FilterScreen'
import SavedResults from './SavedResults'
import { motion, AnimatePresence } from "framer-motion"

//custom Framer Motion components
const MotionSavedResults = motion(SavedResults)
const MotionSearchResults = motion(SearchResults)

export default function MainDisplay(props){

    //animation data
    const containerAnim = {
        hidden: { 
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.35,
                staggerChildren: 0.1
            }
        }
    }

    const childAnim = {
        hidden: {
            x: 100
        },
        show: {
            x: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.35
            }
        }
    }

    const currentDisplay = props.displayState[props.displayState.length-1]

    return (
        <section id="main-display" className="bg-[#0B0B0B] flex flex-col gap-6 items-center px-4 pt-32 pb-32 overflow-scroll -z-10 min-h-screen sm:px-12">
            { currentDisplay === 'filter' && 
                <FilterScreen 
                    filterState={props.filterState}
                    displayState={props.displayState} 
                    handleFilterSelect={props.handleFilterSelect} 
                    handleClearFilters={props.handleClearFilters} 
                /> 
            }
            { currentDisplay === 'search' &&
                <MotionSearchResults 
                    allSearchResults={props.allSearchResults} 
                    sortedResultIDs={props.sortedResultIDs} 
                    displayState={props.displayState}
                    handleRecipeDisplay={props.handleRecipeDisplay}
                    filterState={props.filterState}
                    variants={containerAnim}
                    initial="hidden"
                    animate="show"
                    childAnim={childAnim}
                /> 
            }
            <AnimatePresence>
                { currentDisplay === 'saved' &&
                    <MotionSavedResults
                        savedDrinks={props.savedDrinks}
                        handleRecipeDisplay={props.handleRecipeDisplay}
                        displayState={props.displayState}
                        sortedResultIDs={props.sortedResultIDs}
                        variants={containerAnim}
                        initial="hidden"
                        animate="show"
                        childAnim={childAnim}
                        className="w-full flex flex-col gap-3"
                    />
                }
            </AnimatePresence>
            { currentDisplay === 'recipe' && 
                <Recipe 
                    recipe={props.recipe}
                    savedDrinks={props.savedDrinks} 
                    handleRecipeClose={props.handleRecipeClose}
                    handleSaveDrink={props.handleSaveDrink}
                    handleRemoveDrink={props.handleRemoveDrink}
                /> 
            }
        </section>
    )
}