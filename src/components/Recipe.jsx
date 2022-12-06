import React from 'react'
import SaveDrinkButton from './SaveDrinkButton'

export default function Recipe(){
    return (
        <div className=" bg-blue-600 flex flex-col items-center w-full relative mt-16 px-4 pt-16 pb-6 rounded-sm drop-shadow-xl min-h-[200%] sm:w-[30rem]">
            <img className="absolute w-28 aspect-square rounded-full border-4 border-pink-300 -top-[4rem]" src="./src/assets/cocktail-thumb.png" alt="thumbnail picture of cocktail" />
            <button className="absolute bg-blue-900 top-3 right-3 text-transparent text-[0px] p-5 bg-[url('../assets/choose-no-x.svg')] bg-no-repeat bg-center rounded-full">Close</button>
            <h2 className="text-pink-300 text-xl tracking-wider mb-6">Cocktail Name</h2>
            <div className="rounded-sm overflow-hidden w-full bg-blue-300 mb-6">
                <h3 className="bg-blue-900 text-gray-600 text-sm w-full text-center py-1.5 tracking-wider">Ingredients</h3>
                <p className="px-4 py-3 italic text-violet-300 tracking-wider">Rum, Orange Juice, Salt...</p>
            </div>
            <div className="rounded-sm overflow-hidden w-full bg-blue-300 mb-10">
                <h3 className="bg-blue-900 text-gray-600 text-sm w-full text-center py-1.5 tracking-wider">Instructions</h3>
                <p className="px-4 py-3 text-gray-300 text-sm tracking-wider sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod tellus ac accumsan interdum. Duis nisi eros, luctus vitae dui non, sollicitudin aliquet nibh. Vivamus rutrum bibendum elementum. Sed varius commodo faucibus. Nam eget odio mi. In dapibus quam at velit ornare, at varius ante pellentesque. Integer dignissim vulputate facilisis. Phasellus vestibulum enim eu diam accumsan viverra. Fusce quis luctus urna. Aenean eu dolor mi. Duis ornare viverra nibh, feugiat lacinia nibh dictum in. Proin faucibus, mi sit amet mollis consequat, nibh risus lacinia tortor, id elementum odio lorem nec ex. Nulla ac urna elementum, convallis urna eget, tristique est. Morbi viverra leo non mi pretium, at sagittis nulla condimentum. Vestibulum fringilla libero ac vestibulum blandit. Fusce vitae sollicitudin augue.</p>
            </div>
            <SaveDrinkButton />
        </div>
    )
}