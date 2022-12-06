import React from 'react'
import Header from './Header'
import MainDisplay from './MainDisplay'
import SearchButton from './SearchButton'

export default function App(){
    //state that tells the app what components to display

    const [displayState, setDisplayState] = React.useState('filter')

    return (
        <>
            <Header display={displayState} />
            <MainDisplay display={displayState} />
            <SearchButton display={displayState} />
        </>
    )
}