import React from 'react'
import ViewSavedButton from './ViewSavedButton'

export default function Header(){
    return (
        <header className="fixed left-0 right-0 top-0 bg-blue-600 pt-8 pb-6 px-4 border-b-2 border-[rgba(255_255_255/0.03)] z-10 sm:px-12">
            <div className="flex justify-between items-center md:w-3/4 md:mx-auto lg:w-[48rem]">
                <img src="./src/assets/logo.svg" alt="Boozle logo" />
                <ViewSavedButton />
            </div>
        </header>
    )
}