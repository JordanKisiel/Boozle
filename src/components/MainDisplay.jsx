import React from 'react'
import SearchResults from './SearchResults'
import Recipe from './Recipe'
import FilterScreen from './FilterScreen'
import SavedResults from './SavedResults'

export default function MainDisplay(props){
    return (
        <section id="main-display" className="bg-[#0B0B0B] flex flex-col gap-6 items-center px-4 pt-32 pb-32 overflow-scroll -z-10 min-h-screen sm:px-12">
            <FilterScreen display={props.display} />
            <SearchResults display={props.display} />
            <SavedResults display={props.display} />
            <Recipe display={props.display} />
        </section>
    )
}