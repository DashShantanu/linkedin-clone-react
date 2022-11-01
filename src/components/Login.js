import React, { useState } from 'react';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                );
            }).catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        }))
                    });
            }).catch(error => alert(error));
    };

    return (
        <div className='grid place-items-center mx-auto py-[100px]'>
            <img
                src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png'
                alt=''
                className='object-contain h-[70px] my-5'
            />

            <form className='flex flex-col'>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text' placeholder='Full name (required if registering)'
                    className='w-[350px] h-[50px] text-xl pl-[10px] mb-[10px] rounded-[5px]'
                />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type='text' placeholder='Profile pic URL (optional)'
                    className='w-[350px] h-[50px] text-xl pl-[10px] mb-[10px] rounded-[5px]'
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email' placeholder='Email'
                    className='w-[350px] h-[50px] text-xl pl-[10px] mb-[10px] rounded-[5px]'
                />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password' placeholder='Password'
                    className='w-[350px] h-[50px] text-xl pl-[10px] mb-[10px] rounded-[5px]'
                />

                <button
                    type='submit'
                    className='w-[350px] h-[50px] text-[18px] rounded-[5px] bg-[#0a66c2] text-white'
                    onClick={loginToApp}
                >
                    Sign In
                </button>
            </form>

            <p className='mt-5'>
                Not a member? {' '}
                <span
                    className='cursor-pointer text-[#0a66c2]'
                    onClick={register}
                >
                    Register Now
                </span>
            </p>
        </div >
    );
};

export default Login;
