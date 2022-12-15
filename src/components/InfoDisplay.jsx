import React from 'react'
import { motion, AnimatePresence } from "framer-motion"


const InfoDisplay = React.forwardRef((props, ref) => {

    const currentDisplay = props.displayState[props.displayState.length-1]

    let textToDisplay = ''
    if(currentDisplay === 'filter'){
        textToDisplay = "Let's find a drink! 🍸 What would you like to use?"
    }
    else if(currentDisplay === 'search'){
        if(props.errorState){
            textToDisplay = "Looks like there was an issue getting results! 😭 Try searching again."
        }   
        else if(props.sortedResultIDs.length === 0 && props.filterState.ingredients !== 0){
            textToDisplay = "Unfortunately we couldn't find a drink. Try using less or different filters!"
        }
        else if(props.sortedResultIDs.length < 50 && props.filterState.ingredients.length !== 0){
            textToDisplay = `Top ${props.sortedResultIDs.length} results`
        }
        else if(props.filterState.ingredients.length === 0){
            textToDisplay = "Looks like you didn't select any ingredients. So here's 20 popular drinks!"
        }
        else{
            textToDisplay = 'Top 50 results'
        }
    }
    else if(currentDisplay === 'saved'){
        textToDisplay = "Looks like you don't have any drinks saved. Try searching for some and adding them."
    }

    return (
        <h1 ref={ref} className="text-center font-normal text-2xl text-gray-300 w-3/5 tracking-widest md:my-6">
            {textToDisplay}
        </h1>
    )
})

export default InfoDisplay