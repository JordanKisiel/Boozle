import React from 'react'

export default function SaveDrinkButton(props){
    return (
        <button onClick={()=> {props.handleSaveDrink(props.recipe)}} className="bg-blue-300 text-pink-300 uppercase font-bold rounded-sm tracking-widest pr-4 pt-3 pb-3 w-full border-2 border-[rgba(255_255_255/0.06)] drop-shadow-xl bg-[url('../assets/add-drink-plus.svg')] bg-no-repeat bg-[center_right_2rem]">
            Save Drink for Later
        </button>
    )
}