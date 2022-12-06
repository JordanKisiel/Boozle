import React from 'react'

export default function ViewSavedButton(){
    return (
        <button className="text-pink-300 font-bold bg-blue-300 bg-[url('../assets/saved-drinks-arrow.svg')] bg-no-repeat bg-[center_right_0.1rem] pl-2 pr-[2.6rem] pt-2 pb-1 border-2 border-[rgba(255_255_255/0.06)] rounded-[2px] drop-shadow-xl">
            <span className="inline-block text-[2.5rem] font-normal leading-5 pr-1">0</span>
            <span className="inline-block border-l-[1px] border-l-blue-100 uppercase w-12 leading-4 tracking-widest pl-1">Saved Drinks</span>
        </button>
    )
}