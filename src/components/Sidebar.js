import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='group flex text-[13px] text-[gray] font-bold mb-[5px] p-[5px] cursor-pointer hover:bg-[whitesmoke] hover:rounded-[10px] hover:text-black '>
            <span className='ml-[5px] mr-[10px]'>
                #
            </span>
            <p className='text-[gray] group-hover:text-black'>{topic}</p>
        </div>
    );

    return (
        <div className='sticky top-20 flex flex-col basis-1/5 items-center rounded-[10px] h-fit'>
            {/* Sidebar Top */}
            <div className='w-full flex flex-col items-center border-[1px] border-solid border-[lightgray] border-b-0 rounded-t-[10px] bg-white pb-[10px]'>
                <img
                    src='https://images.unsplash.com/photo-1666872011975-62aeb7cfcd3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    alt=''
                    className='mb-[-20px] w-full h-[60px] rounded-t-[10px] object-cover'
                />
                <Avatar
                    src={user.photoUrl} className='mb-[10px]'
                >
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2 className='font-bold text-[18px]'>
                    {user.displayName}
                </h2>
                <h4 className='text-[gray] text-[12px]'>
                    {user.email}
                </h4>
            </div>

            {/* Sidebar Stats */}
            <div className='p-[10px] w-full bg-white border-[1px] border-solid border-[lightgray] rounded-b-[10px]'>
                <div className='mt-[10px] flex justify-between'>
                    <p className='text-[gray] text-[13px] font-semibold'>Views on profile</p>
                    <p className='!text-[#0a66c2] text-[13px] font-bold'>2,674</p>
                </div>

                <div className='mt-[10px] flex justify-between'>
                    <p className='text-[gray] text-[13px] font-semibold'>Connections</p>
                    <p className='!text-[#0a66c2] text-[13px] font-bold'>1,729</p>
                </div>
            </div>

            {/* Sidebar Bottom */}
            <div className='w-full text-left p-[10px] border-[1px] border-solid border-[lightgray] bg-white rounded-[10px] mt-[10px]'>
                <p className='text-[13px] mb-[10px]'>
                    Recent
                </p>
                {recentItem('react-js')}
                {recentItem('node-js')}
                {recentItem('cloud-summit')}
                {recentItem('github')}
                {recentItem('developer')}
            </div>
        </div>
    )
};

export default Sidebar;
