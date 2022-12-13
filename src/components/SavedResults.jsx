import React from 'react'
import InfoDisplay from './InfoDisplay'
import ResultButton from './ResultButton'

export default function SavedResults(props){

    const savedDrinksArray = props.savedDrinks.map((drink, index) => {
        return (
            <ResultButton 
                key={index} 
                name={drink.strDrink} 
                image={drink.strDrinkThumb}
                id={drink.idDrink} 
                handleRecipeDisplay={props.handleRecipeDisplay}  
            />
        )
    })

    return (
        <>
            { savedDrinksArray }
        </>
    )
}