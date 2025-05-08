import React, { useEffect } from 'react'
import { LOGO_URL, USER_LOGO_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe =
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }))
                    navigate('/browse');
                } else {
                    dispatch(removeUser())
                    navigate('/')
                }
            })
        return () => {
            unsubscribe();
        }
    }, [])

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }
    return (
        <div className='absolute z-10 bg-gradient-to-b from-black flex w-full justify-between'>
            <div className='w-44 py-4'>
                <img src={LOGO_URL} alt='Netflix Logo' />
            </div>
            {user && (<div className='flex items-center gap-4 p-4'>
                <img className='w-10' src={user.photoURL} />
                <div>
                    <h3 className='text-white text-lg'>{user.displayName}</h3>
                    <button onClick={handleSignOut} className='text-2xl text-red-600 underline'>Sign out</button>
                </div>
            </div>)}

        </div>
    )
}

export default Header