import React from 'react'

export default function SaveDrinkButton(props){

    const isAlreadySaved = props.savedDrinks.some((savedDrink) => savedDrink.idDrink === props.recipe.idDrink)

    const bgImageClass = !isAlreadySaved ? "bg-[url('../assets/add-drink-plus.svg')]" : "bg-[url('../assets/remove-drink-minus.svg')]"
    const borderColorClass = !isAlreadySaved ? "border-[rgba(255_255_255/0.06)]" : "border-[rgba(201_79_106/0.30)]"
    const bgPosClass = !isAlreadySaved ? "bg-[center_right_2rem]" : "bg-[center_right_3rem]"

    return (
        <button 
            onClick={() => {
                if(!isAlreadySaved){
                    props.handleSaveDrink(props.recipe)
                }
                else{
                    props.handleRemoveDrink(props.recipe)
                }
            }} 
            className={`bg-blue-300 text-pink-300 uppercase font-bold rounded-sm tracking-widest pr-4 pt-3 pb-3 w-full border-2 ${borderColorClass} drop-shadow-xl ${bgImageClass} bg-no-repeat ${bgPosClass} max-w-[20rem]`}>
                {!isAlreadySaved ? 'Save Drink for Later' : 'Remove Saved Drink'}
        </button>
    )
}