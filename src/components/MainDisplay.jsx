import React from 'react'
import SearchResults from './SearchResults'
import Recipe from './Recipe'
import FilterScreen from './FilterScreen'
import SavedResults from './SavedResults'

export default function MainDisplay(props){

    const [filterState, setFilterState] = React.useState(
        {
            "ingredients": [],
            "dislikes": []
        }
    )

    function handleFilterSelect(filterName, isIngredient){
        if(isIngredient){
            setFilterState((prevFilters) => {
                if(!prevFilters.ingredients.includes(filterName)){
                    return {...prevFilters, "ingredients": [...prevFilters.ingredients, filterName]}
                }
                else{
                    return {...prevFilters, "ingredients": prevFilters.ingredients.filter(filter => filter !== filterName)}
                }
            })
        }
        else{
            setFilterState((prevFilters) => {
                if(!prevFilters.dislikes.includes(filterName)){
                    return {...prevFilters, "dislikes": [...prevFilters.dislikes, filterName]}
                }
                else{
                    return {...prevFilters, "dislikes": prevFilters.dislikes.filter(filter => filter !== filterName)}
                }
            })
        }
    }

    return (
        <section id="main-display" className="bg-[#0B0B0B] flex flex-col gap-6 items-center px-4 pt-32 pb-32 overflow-scroll -z-10 min-h-screen sm:px-12">
            { props.display === 'filter' && <FilterScreen filterState={filterState} handleFilterSelect={handleFilterSelect} /> }
            { props.display === 'search' && <SearchResults /> }
            { props.display === 'saved' && <SavedResults /> }
            { props.display === 'recipe' && <Recipe /> }
        </section>
    )
}