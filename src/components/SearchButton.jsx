import React from 'react'

export default function SearchButton(props){

    const currentDisplay = props.displayState[props.displayState.length-1]

    let textToDisplay = ''
    let bgImageClass = ''

    if(currentDisplay === 'filter'){
        textToDisplay = 'Search Responsibly'
        bgImageClass = 'bg-[url("/martini-icon.svg")]'
    }
    else{
        textToDisplay = 'Back to Search'
        bgImageClass = 'bg-[url("/back-arrow.svg")]'
    }

    return (
        <div className="flex justify-center fixed left-0 right-0 bottom-0 bg-blue-600 p-4 border-t-2 border-[rgba(255_255_255/0.03)] sm:px-12">
            <button 
                onClick={()=>{
                    if(currentDisplay === 'filter'){
                        props.handleSearch()
                    }
                    else{
                        props.handleFilterDisplay()
                    }
                }} 
                id="search-btn" 
                className="bg-gray-600 rounded-sm w-full font-bold uppercase tracking-wider py-3.5 text-blue-600 text-lg drop-shadow-xl bg-gradient-to-r from-[#D79472] via-[#C94F6A] to-[#C2335C] border-2 border-[#cc7777] sm:w-96">
                <span className={`${bgImageClass} bg-no-repeat bg-[center_left_1rem] pl-[3.25rem] py-3 mr-5`}>{textToDisplay}</span>
            </button>
        </div>
    )
}