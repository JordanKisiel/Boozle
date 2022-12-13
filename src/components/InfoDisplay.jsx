import React from 'react'

export default function InfoDisplay(props){

    const currentDisplay = props.displayState[props.displayState.length-1]

    let textToDisplay = ''
    if(currentDisplay === 'filter'){
        textToDisplay = 'What would you like to use?'
    }
    else if(currentDisplay === 'search'){
        if(props.sortedResultIDs.length < 50 && props.filterState.ingredients.length !== 0){
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
        <h1 className="text-center font-normal text-2xl text-gray-300 w-3/5 tracking-widest md:my-6">
            {textToDisplay}
        </h1>
    )
}