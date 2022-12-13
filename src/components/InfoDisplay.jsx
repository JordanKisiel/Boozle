import React from 'react'

export default function InfoDisplay(props){

    const currentDisplay = props.displayState[props.displayState.length-1]

    let textToDisplay = ''
    if(currentDisplay === 'filter'){
        textToDisplay = 'What would you like to use?'
    }
    else if(currentDisplay === 'search'){
        if(props.sortedResultIDs.length < 50){
            textToDisplay = `Top ${props.sortedResultIDs.length} results`
        }
        else{
            textToDisplay = 'Top 50 results'
        }
    }
    
    return (
        <h1 className="text-center font-normal text-2xl text-gray-300 w-3/5 tracking-widest md:my-6">
            {textToDisplay}
        </h1>
    )
}