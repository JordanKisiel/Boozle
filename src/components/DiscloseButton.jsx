import React from 'react'

export default function DiscloseButton(props){

    let selectedArray = []

    if(props.title !== 'Dislikes'){
        selectedArray = props.ingredients.filter((ingredient) => {
            return (props.filterState.ingredients.includes(ingredient))
        })
    }
    else{
        selectedArray = props.ingredients.filter((ingredient) => {
            return (props.filterState.dislikes.includes(ingredient))
        })
    }  

    return (
        <button onClick={props.handleFilterOpen} className={`bg-blue-600 ${props.titleColor} text-xl w-full ${props.isOpen ? 'py-1' : 'py-3'} ${props.isOpen ? 'bg-[url(../assets/up-arrow.svg)]' : 'bg-[url(../assets/down-arrow.svg)]'} bg-no-repeat bg-[center_right_1rem] tracking-widest relative`}>
            {!props.isOpen && <span className="absolute left-2 top-1/4 inline-block mt-0.5 bg-blue-900 rounded-full px-4 py-0.5 text-gray-600 italic text-sm tracking-widest">{`${selectedArray.length} selected`}</span>}
            <span>{props.title}</span>
        </button>
    )
}