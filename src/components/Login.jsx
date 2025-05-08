import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateSignIn, validateSignUp } from '../utils/validate';
import { LANDING_PAGE_BG_IMAGE } from '../utils/constants';

const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const email = useRef(null);
    const password = useRef(null);
    const username = useRef(null);
    const handleButtonClick = () => {
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;
        const usernameValue = username.current?.value;
        const message = isSignUpForm ? validateSignUp({ email: emailValue, password: passwordValue, username: usernameValue }) : validateSignIn({ email: emailValue, password: passwordValue });
        console.log(message);
        if (!message.isValid) {
            setErrors(message.errors);
        } else {
            setErrors([]);
        }
        console.log(emailValue, passwordValue, usernameValue);
    }

    return (
        <div>
            <Header />
            <div className="relative">
                <img src={LANDING_PAGE_BG_IMAGE}
                    alt="Landing page Background"
                    className="w-full h-screen object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-6 w-3/12 rounded-md">
                    <p className='font-bold text-white py-4 text-2xl '>
                        {isSignUpForm ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-4">
                        <input ref={email} type="text" name="email" id="email" placeholder="Email" className="rounded text-white bg-gray-900 py-4 px-6" />
                        <input ref={password} type="password" name="password" id="password" placeholder="Password" className=" text-white rounded bg-gray-900 py-4 px-6" />
                        {isSignUpForm && (
                            <input ref={username} type="text" name="username" id="username" placeholder="Username" className="  text-white rounded bg-gray-900 py-4 px-6" />
                        )}
                        {errors.email && <p className=" text-red-600">{errors.email}</p>}
                        {errors.password && <p className="  text-red-600">{errors.password}</p>}
                        {errors.username && <p className=" text-red-600">{errors.username}</p>}
                        <button type="submit" className="  bg-red-600 text-white rounded py-4 px-6" onClick={handleButtonClick}>
                            {isSignUpForm ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                    <p className=" text-white mt-4 text-center">
                        {isSignUpForm ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            onClick={() => setIsSignUpForm(!isSignUpForm)}
                            className="text-red-600 underline"
                        >
                            {isSignUpForm ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login