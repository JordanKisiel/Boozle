import React from 'react'
import SaveDrinkButton from './SaveDrinkButton'
import { motion, AnimatePresence } from "framer-motion"

export default function Recipe(props){

    let ingredientString = ''

    //using explict for loop because API stores all ingredients as separate values
    //rather than in an array or other collection
    //these values seem to max out at 15
    for(let i = 1; i < 16; i++){
        if(props.recipe['strIngredient' + i]){
            ingredientString += props.recipe['strIngredient' + i]
            
            //look ahead to see if this is the last ingredient
            if(props.recipe['strIngredient' + (i + 1)]){
                ingredientString += ', '
            }
        }
    }

    return (
        <motion.div
            initial={
                {
                    opacity: 0,
                    y: -100,
                }
            }
            animate={
                {
                    opacity: 1,
                    y: 0
                }
            }
            exit={
                {
                    opacity: 0,
                    y: -100
                }
            }
            transition={
                {
                    ease: "easeIn",
                    duration: 0.25
                }
            }
            className=" bg-blue-600 flex flex-col items-center w-full relative mt-16 px-4 pt-16 pb-6 rounded-sm drop-shadow-xl min-h-[200%] sm:w-[30rem]">
            <img className="absolute w-28 aspect-square rounded-full border-4 border-pink-300 -top-[4rem]" src={props.recipe.strDrinkThumb ? props.recipe.strDrinkThumb : '/cocktail-image-placeholder.png'} alt={`thumbnail picture of ${props.recipe.strDrink} `} 
        />
            <button onClick={props.handleRecipeClose} className="absolute bg-blue-900 top-3 right-3 text-transparent text-[0px] p-5 bg-[url('/choose-no-x.svg')] bg-no-repeat bg-center rounded-full">Close</button>
            <h2 className="text-pink-300 text-xl tracking-wider mb-6">{props.recipe.strDrink}</h2>
            <div className="rounded-sm overflow-hidden w-full bg-blue-300 mb-6">
                <h3 className="bg-blue-900 text-gray-600 text-sm w-full text-center py-1.5 tracking-wider">Ingredients</h3>
                <p className="px-4 py-3 italic text-violet-300 tracking-wider">{ingredientString}</p>
            </div>
            <div className="rounded-sm overflow-hidden w-full bg-blue-300 mb-10">
                <h3 className="bg-blue-900 text-gray-600 text-sm w-full text-center py-1.5 tracking-wider">Instructions</h3>
                <p className="px-4 py-3 text-gray-300 text-sm tracking-wider sm:text-base">{props.recipe.strInstructions}</p>
            </div>
            <SaveDrinkButton
                handleRemoveDrink={props.handleRemoveDrink}
                handleSaveDrink={props.handleSaveDrink}
                recipe={props.recipe}
                savedDrinks={props.savedDrinks}
            />
        </motion.div>
    )
}