import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

import HeaderOptions from './HeaderOptions';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className='sticky top-0 bg-white flex justify-evenly border-b-[0.1px] border-solid border-[lightgray] py-[10px] w-full z-[999]'>
            {/* Header Left Part */}
            <div className='flex items-center'>
                {/* Logo */}
                <img
                    src='https://www.svgrepo.com/show/157006/linkedin.svg' alt=''
                    className='object-contain h-10 mr-[10px]'
                />

                {/* Search Field */}
                <div className='flex items-center p-[10px] rounded-[5px] text-[gray] bg-[#eef3f8]'>
                    <SearchIcon color='action' />
                    <input
                        className='outline-none border-none bg-inherit'
                        type='text'
                        placeholder='Search'
                    />
                </div>
            </div>

            {/* Header Right Part */}
            <div className='flex gap-5'>
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
                <HeaderOptions
                    avatar={true}
                    title='Me'
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
};

export default Header;
