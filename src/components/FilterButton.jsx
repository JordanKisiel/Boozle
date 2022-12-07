import React from 'react'

export default function FilterButton(props){

    let isSelected = false

    if(props.filterCategory !== 'Dislikes'){
        isSelected = props.filterState.ingredients.includes(props.name)
    }
    else{
        isSelected = props.filterState.dislikes.includes(props.name)
    }

    return (
        <button onClick={() => {props.handleFilterSelect(props.name,(props.filterCategory !== 'Dislikes'))}} className={`${isSelected ? props.bgColor : 'bg-blue-100'} ${isSelected ? 'text-blue-300' : 'text-gray-300'} font-bold text-xl rounded-sm pl-2 pr-8 py-0.5 ${isSelected ? 'bg-[url(../assets/filter-minus.svg)]' : 'bg-[url(../assets/filter-plus.svg)]'}  bg-no-repeat bg-[center_right_0.75rem] tracking-wider`}>{props.name}</button>
    )
}