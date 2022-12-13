import React from 'react'
import Header from './Header'
import MainDisplay from './MainDisplay'
import SearchButton from './SearchButton'
import apiKey from '../data/apiKey.json'

export default function App(){
    
    //api link
    const baseUrl = 'https://www.thecocktaildb.com/api/json/v2'

    const [displayState, setDisplayState] = React.useState('filter')  //available states: 'filter', 'search', 'recipe', 'saved'
    const [allSearchResults, setAllSearchResults] = React.useState([])
    const [sortedResultIDs, setSortedResultIDs] = React.useState([])
    const [recipe, setRecipe] = React.useState({})

    //load filters from local storage if they exist
    const [filterState, setFilterState] = React.useState(
        localStorage.getItem("filters") ? JSON.parse(localStorage.getItem("filters")) :
        {
            "ingredients": [],
            "dislikes": []
        }
    )

    //load saved drinks from local storage if they exist
    const [savedDrinks, setSavedDrinks] = React.useState(
        localStorage.getItem("savedDrinks") ? JSON.parse(localStorage.getItem("savedDrinks")) : []
    )

    //write filters to local storage so it can be recalled if app refreshed
    localStorage.setItem("filters", JSON.stringify(filterState))
    
    //write saved drinks to local storage so they can be recalled later
    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks))

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

    function handleClearFilters(){
        setFilterState({
            "ingredients": [],
            "dislikes": []
        })
    }

    function handleSearch(){
    
        //create array of promises mapped from ingredients array
        if(filterState.ingredients.length > 0){
            const fetchArray = filterState.ingredients.map((ingredient) => {
                return fetch(`${baseUrl}/${apiKey.apiKey}/filter.php?i=${ingredient}`)
                        .then(res => res.json())
            })

            Promise.all(fetchArray)
                .then(dataArray => {

                    //join all request results into one array
                    let allResultsArray = []

                    dataArray.forEach((data) => {
                        allResultsArray = [...allResultsArray, ...data.drinks]    
                    })

                    setAllSearchResults(allResultsArray)

                    //find occurences of result ids
                    const occurences = {}

                    const resultIDs = allResultsArray.map(drink => drink.idDrink)

                    for(const id of resultIDs){
                        occurences[id] = occurences[id] ? occurences[id] + 1 : 1
                    }

                    //sort ids by number of occurences
                    const sortedIDs = Object.keys(occurences).sort((a, b) => {
                        return occurences[b] - occurences[a]
                    })

                    setSortedResultIDs(sortedIDs)

                    setDisplayState('search')
                })
        }
        else{

            //if user selects no filters, get the 20 most popular drinks
            fetch(`${baseUrl}/${apiKey.apiKey}/popular.php`)
                .then(res => res.json())
                .then(data => {
                    setAllSearchResults(data.drinks)
                    setSortedResultIDs(data.drinks.map(drink => drink.idDrink))
                    setDisplayState('search')
                })
        }

    }

    function handleRecipeDisplay(drinkID){
        
        fetch(`${baseUrl}/${apiKey.apiKey}/lookup.php?i=${drinkID}`)
            .then(res => res.json())
            .then(data => {
                
                setRecipe(data.drinks[0])

                setDisplayState('recipe')
            })
    }

    function handleRecipeClose(){
        setDisplayState('search')
    }

    function handleFilterDisplay(){
        setDisplayState('filter')
    }

    function handleSaveDrink(drink){
        setSavedDrinks((prevArray) => [...prevArray, drink])
    }

    function handleViewSaved(){
        setDisplayState('saved')
    }

    return (
        <>
            <Header 
                display={displayState} 
                savedDrinks={savedDrinks} 
                handleViewSaved={handleViewSaved}
            />
            <MainDisplay 
                displayState={displayState} 
                filterState={filterState}
                allSearchResults={allSearchResults} 
                sortedResultIDs={sortedResultIDs}
                recipe={recipe}
                savedDrinks={savedDrinks}
                handleFilterSelect={handleFilterSelect}
                handleClearFilters={handleClearFilters}
                handleRecipeDisplay={handleRecipeDisplay}
                handleRecipeClose={handleRecipeClose}
                handleSaveDrink={handleSaveDrink}
            />
            <SearchButton 
                displayState={displayState} 
                handleSearch={handleSearch} 
                handleFilterDisplay={handleFilterDisplay}
            />
        </>
    )
}