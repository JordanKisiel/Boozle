import React from 'react'
import SearchResults from './SearchResults'
import Recipe from './Recipe'
import FilterScreen from './FilterScreen'
import SavedResults from './SavedResults'

export default function MainDisplay(props){

    const currentDisplay = props.displayState[props.displayState.length-1]

    return (
        <section id="main-display" className="bg-[#0B0B0B] flex flex-col gap-6 items-center px-4 pt-32 pb-32 overflow-scroll -z-10 min-h-screen sm:px-12">
            { currentDisplay === 'filter' && 
                <FilterScreen 
                    filterState={props.filterState}
                    displayState={props.displayState} 
                    handleFilterSelect={props.handleFilterSelect} 
                    handleClearFilters={props.handleClearFilters} 
                /> 
            }
            { currentDisplay === 'search' &&
                <SearchResults 
                    allSearchResults={props.allSearchResults} 
                    sortedResultIDs={props.sortedResultIDs} 
                    displayState={props.displayState}
                    handleRecipeDisplay={props.handleRecipeDisplay}
                /> 
            }
            { currentDisplay === 'saved' && 
                <SavedResults
                    savedDrinks={props.savedDrinks}
                    handleRecipeDisplay={props.handleRecipeDisplay}
                    displayState={props.displayState}
                    sortedResultIDs={props.sortedResultIDs} 
                /> 
            }
            { currentDisplay === 'recipe' && 
                <Recipe 
                    recipe={props.recipe} 
                    handleRecipeClose={props.handleRecipeClose}
                    handleSaveDrink={props.handleSaveDrink}
                /> 
            }
        </section>
    )
}