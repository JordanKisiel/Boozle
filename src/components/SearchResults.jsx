import React from 'react'
import ResultButton from './ResultButton'
import InfoDisplay from './InfoDisplay'
import { motion, AnimatePresence } from "framer-motion"

const MotionResultButton = motion(ResultButton)

const SearchResults = React.forwardRef((props, ref) => {

    const maxNumToDisplay = 50

    const resultBtnArray = props.sortedResultIDs.map((id, index) => {
        const matchingDrink = props.allSearchResults.find((drink) => {
            return drink.idDrink === id
        })


        return (
            <MotionResultButton 
                key={index} 
                name={matchingDrink.strDrink} 
                image={matchingDrink.strDrinkThumb ? matchingDrink.strDrinkThumb : './src/assets/cocktail-image-placeholder.png'}
                id={matchingDrink.idDrink} 
                handleRecipeDisplay={props.handleRecipeDisplay}
                variants={props.childAnim}  
            />
        )
    })

    return (
        <>
            <InfoDisplay 
                displayState={props.displayState} 
                sortedResultIDs={props.sortedResultIDs} 
                filterState={props.filterState} 
                errorState={props.errorState}
            />
            <div ref={ref} className="w-full flex flex-col items-center gap-5">
                { resultBtnArray.slice(0, maxNumToDisplay + 1) }
            </div>
        </>
    )
})

export default SearchResults