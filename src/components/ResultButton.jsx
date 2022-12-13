import React from 'react'

export default function ResultButton(props){

    const bgImage = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <button onClick={() => { props.handleRecipeDisplay(props.id)}} className="bg-blue-600 py-3 w-full drop-shadow-xl grid grid-cols-[1fr_4fr] grid-rows-1 px-6 gap-y-1.5 gap-x-6 sm:w-[30rem]">
            <span style={bgImage} className="bg-[url('../assets/cocktail-thumb.png')] bg-no-repeat bg-cover inline-block w-full aspect-square rounded-full border-2 border-pink-300 row-span-2">{ /* Cocktail image displayed as bg */ }</span>
            <span className="text-pink-300 text-xl justify-self-start self-center text-left sm:text-2xl">{props.name}</span>
        </button>
    )
}