import React from 'react'
import Header from './Header'
import MainDisplay from './MainDisplay'
import SearchButton from './SearchButton'

export default function App(){
    
    const [displayState, setDisplayState] = React.useState('filter')

    return (
        <>
            <Header display={displayState} />
            <MainDisplay display={displayState} />
            <SearchButton display={displayState} />
        </>
    )
}