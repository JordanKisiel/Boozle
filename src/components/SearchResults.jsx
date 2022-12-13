import React from 'react'
import ResultButton from './ResultButton'
import InfoDisplay from './InfoDisplay'

export default function SearchResults(props){

    const maxNumToDisplay = 50

    const resultBtnArray = props.sortedResultIDs.map((id, index) => {
        const matchingDrink = props.allSearchResults.find((drink) => {
            return drink.idDrink === id
        })

        return (
            <ResultButton 
                key={index} 
                name={matchingDrink.strDrink} 
                image={matchingDrink.strDrinkThumb}
                id={matchingDrink.idDrink} 
                handleRecipeDisplay={props.handleRecipeDisplay}  
            />
        )
    })

    return (
        <>
            <InfoDisplay displayState={props.displayState} sortedResultIDs={props.sortedResultIDs} />
            { resultBtnArray.slice(0, maxNumToDisplay + 1) }
        </>
    )
}