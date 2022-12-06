import React from 'react'
import DiscloseButton from './DiscloseButton'
import FilterButton from './FilterButton'
import FilterSearch from './FilterSearch'

export default function FilterSelect(){
    return (
        <>
            <div className="hidden w-full rounded-sm overflow-hidden drop-shadow-xl md:w-3/4 lg:w-[48rem]">
                <DiscloseButton />
                <div className="bg-blue-300 px-5 py-5 space-y-8">
                    <div className="flex flex-wrap gap-4">
                        <FilterButton />
                        <FilterButton />
                        <FilterButton />
                        <FilterButton />
                        <FilterButton />
                        <FilterButton />
                    </div>
                    <div className="border-t-2 border-[rgba(255_255_255/0.08)] pt-4 pb-0 flex">
                        <FilterSearch />
                    </div>
                </div>
            </div>
            
            {/* Collapsed Filter */}
            <div className="hidden w-full rounded-sm overflow-hidden drop-shadow-xl md:w-3/4 lg:w-[48rem]">
                <button className="bg-blue-600 text-pink-300 text-xl w-full py-3 bg-[url('../assets/down-arrow.svg')] bg-no-repeat bg-[center_right_1rem] tracking-widest relative">
                <span className="absolute left-2 top-1/4 inline-block mt-0.5 bg-blue-900 rounded-full px-4 py-0.5 text-gray-600 italic text-sm tracking-widest">2 selected</span>
                <span>Mixer</span>
                </button>
            </div>
        </>
    )
}