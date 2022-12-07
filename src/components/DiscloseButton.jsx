import React from 'react'

export default function DiscloseButton(props){

    return (
        <button className={`bg-blue-600 ${props.titleColor} text-xl w-full py-1 bg-[url('../assets/up-arrow.svg')] bg-no-repeat bg-[center_right_1rem] tracking-widest`}>
            {props.title}
        </button>
    )
}