import React from 'react'
import Header from './Header'
import MainDisplay from './MainDisplay'
import SearchButton from './SearchButton'
import apiKey from '../data/apiKey.json'

export default function App(){
    
    //api link
    const baseUrl = 'https://www.thecocktaildb.com/api/json/v2'

    //displayState is array that holds history of states
    //this will allow the app to navigate back to previous states more easily
    //available states: 'filter', 'search', 'recipe', 'saved'
    const [displayState, setDisplayState] = React.useState(['filter'])  
    const [allSearchResults, setAllSearchResults] = React.useState([])
    const [sortedResultIDs, setSortedResultIDs] = React.useState([])
    const [recipe, setRecipe] = React.useState({})
    const [errorState, setErrorState] = React.useState(false)

    //load filters from local storage if they exist
    const [filterState, setFilterState] = React.useState(
        JSON.parse(localStorage.getItem("filters")) ||
        {
            "ingredients": [],
            "dislikes": []
        }
    )

    //load saved drinks from local storage if they exist
    const [savedDrinks, setSavedDrinks] = React.useState(
        JSON.parse(localStorage.getItem("savedDrinks")) || []
    )
    

    React.useEffect(() => {
        //write filters to local storage so it can be recalled if app refreshed
        localStorage.setItem("filters", JSON.stringify(filterState))
            
        //write saved drinks to local storage so they can be recalled later
        localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks))
    }, [filterState, savedDrinks])
    

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

                    setErrorState(false)

                    const dislikeFetchArray = filterState.dislikes.map((ingredient) => {
                        return fetch(`${baseUrl}/${apiKey.apiKey}/filter.php?i=${ingredient}`)
                                .then(res => res.json())
                    })

                    Promise.all(dislikeFetchArray)
                        .then(dislikeDataArray => {
                            
                            setErrorState(false)

                            //join all request results into one array
                            let allResultsArray = []

                            dataArray.forEach((data) => {
                                allResultsArray = [...allResultsArray, ...data.drinks]    
                            })

                            //join all the dislike results into one array
                            let dislikeArray = []

                            dislikeDataArray.forEach((data) => {
                                dislikeArray = [...dislikeArray, ...data.drinks]
                            })

                            //filter out any results that include a dislike in their ingredients

                            const dislikeIDs = dislikeArray.map(drink => drink.idDrink)

                            const filteredArray = allResultsArray.filter(drink => {
                                return !dislikeIDs.includes(drink.idDrink)
                            })

                            setAllSearchResults(filteredArray)

                            //find occurences of result ids
                            const occurences = {}

                            const resultIDs = filteredArray.map(drink => drink.idDrink)

                            for(const id of resultIDs){
                                occurences[id] = occurences[id] ? occurences[id] + 1 : 1
                            }

                            //removed undefined occurences
                            //represents results that didn't find a drink
                            delete occurences.undefined

                            //sort ids by number of occurences
                            const sortedIDs = Object.keys(occurences).sort((a, b) => {
                                return occurences[b] - occurences[a]
                            })

                            //console.log(sortedIDs)

                            setSortedResultIDs(sortedIDs)

                            setDisplayState((prevArray) => [...prevArray, 'search'])
                        })
                        .catch(error => {
                            if(error){
                                setErrorState(true)
                            }
                            setDisplayState((prevArray) => [...prevArray, 'search'])
                        })
                })
                .catch(error => {
                    if(error){
                        setErrorState(true)
                    }
                    setDisplayState((prevArray) => [...prevArray, 'search'])
                })

        }
        else{

            //if user selects no filters, get the 20 most popular drinks
            fetch(`${baseUrl}/${apiKey.apiKey}/popular.php`)
                .then(res => res.json())
                .then(data => {
                    setErrorState(false)
                    setAllSearchResults(data.drinks)
                    setSortedResultIDs(data.drinks.map(drink => drink.idDrink))
                    setDisplayState((prevArray) => [...prevArray, 'search'])
                })
                .catch(error => {
                    if(error){
                        setErrorState(true)
                    }
                    setDisplayState((prevArray) => [...prevArray, 'search'])
                })
        }           

    }

    function handleRecipeDisplay(drinkID){
        
        fetch(`${baseUrl}/${apiKey.apiKey}/lookup.php?i=${drinkID}`)
            .then(res => res.json())
            .then(data => {
                
                setRecipe(data.drinks[0])

                setDisplayState((prevArray) => [...prevArray, 'recipe'])
            })
    }

    function handleRecipeClose(){
        setDisplayState((prevArray) => prevArray.slice(0, -1))
    }

    function handleFilterDisplay(){
        setDisplayState((prevArray) => [...prevArray, 'filter'])
    }

    function handleSaveDrink(drink){
        setSavedDrinks((prevArray) => {
            if(!prevArray.some(storedDrink => storedDrink.idDrink === drink.idDrink)){
                return [...prevArray, drink]
            }
            else{
                return prevArray
            }
        })
    }

    function handleRemoveDrink(drink){
        setSavedDrinks((prevArray) => prevArray.filter(storedDrink => !(storedDrink.idDrink === drink.idDrink)))
    }

    function handleViewSaved(){
        setDisplayState((prevArray) => [...prevArray, 'saved'])
    }

    return (
        <>
            <Header 
                displayState={displayState} 
                savedDrinks={savedDrinks} 
                handleViewSaved={handleViewSaved}
                handleFilterDisplay={handleFilterDisplay}
            />
            <MainDisplay 
                displayState={displayState} 
                filterState={filterState}
                allSearchResults={allSearchResults} 
                sortedResultIDs={sortedResultIDs}
                recipe={recipe}
                savedDrinks={savedDrinks}
                errorState={errorState}
                handleFilterSelect={handleFilterSelect}
                handleClearFilters={handleClearFilters}
                handleRecipeDisplay={handleRecipeDisplay}
                handleRecipeClose={handleRecipeClose}
                handleSaveDrink={handleSaveDrink}
                handleRemoveDrink={handleRemoveDrink}
            />
            <SearchButton 
                displayState={displayState} 
                handleSearch={handleSearch} 
                handleFilterDisplay={handleFilterDisplay}
            />
        </>
    )
}