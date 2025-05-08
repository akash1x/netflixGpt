import React from 'react'
import { LOGO_URL, USER_LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className='absolute z-10 bg-gradient-to-b from-black flex w-full justify-between'>
            <div className='w-44 py-4'>
                <img src={LOGO_URL} alt='Netflix Logo' />
            </div>
            <div className='flex items-center gap-4 p-4'>
                <img className='w-10' src={USER_LOGO_URL} />
                <button className='text-2xl text-red-600 underline'>Sign out</button>
            </div>
        </div>
    )
}

export default Header