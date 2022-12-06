import React from 'react'

export default function ResultButton(){
    return (
        <button className="hidden bg-blue-600 py-3 w-full drop-shadow-xl grid grid-cols-[1fr_4fr] grid-rows-2 px-6 gap-y-1.5 gap-x-6 sm:w-[30rem]">
            <span className="bg-[url('../assets/cocktail-thumb.png')] bg-no-repeat bg-cover inline-block w-full aspect-square rounded-full border-2 border-pink-300 row-span-2">{ /* Cocktail image displayed as bg */ }</span>
            <span className="text-pink-300 text-xl justify-self-start sm:text-2xl">Cocktail Name</span>
            <span className="bg-blue-900 rounded-full px-3.5 py-0.5 text-gray-600 italic text-sm tracking-widest justify-self-start sm:text-base">Rum, Orange Juice, Salt...</span>
        </button>
    )
}