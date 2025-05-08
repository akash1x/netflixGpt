import React from 'react'
import Header from './Header'
import { LANDING_PAGE_BG_IMAGE } from '../utils/constants'

const Browse = () => {
    return (
        <div>
            <Header />
            <div className="relative">
                <img src={LANDING_PAGE_BG_IMAGE}
                    alt="Landing page Background"
                    className="w-full h-screen object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Welcome to the Browse Page</h1>
                    <p className="text-white text-lg">Explore our collection of movies and shows</p>
                    <button className="bg-red-600 text-white rounded py-2 px-4 mt-4">Browse Now</button>
                </div>
            </div>
        </div>
    )
}

export default Browse