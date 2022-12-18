import React from 'react'
import InfoDisplay from './InfoDisplay'
import ResultButton from './ResultButton'
import { motion, AnimatePresence } from "framer-motion"

//Framer Motion custom component
const MotionResultButton = motion(ResultButton)

const SavedResults = React.forwardRef((props, ref) => {

    const savedDrinksArray = props.savedDrinks.map((drink) => {
        return (
            <MotionResultButton 
                key={drink.idDrink} 
                name={drink.strDrink} 
                image={drink.strDrinkThumb ? drink.strDrinkThumb : '/cocktail-image-placeholder.png'}
                id={drink.idDrink} 
                handleRecipeDisplay={props.handleRecipeDisplay}
                variants={props.childAnim}
            />
        )
    })

    return (
        <div ref={ref} className="w-full flex flex-col items-center gap-5">
            { (props.savedDrinks.length === 0) &&
                <InfoDisplay displayState={props.displayState} sortedResultsIDs={props.sortedResultsIDs} />
            }
            { savedDrinksArray }
        </div>
    )
})

export default SavedResults