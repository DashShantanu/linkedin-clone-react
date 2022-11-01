import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser);

    return (
        <div
            className='group flex flex-col items-center mr[20px] cursor-pointer'
            onClick={onClick}
        >
            {Icon && <Icon color='action' className='group-hover:fill-black object-contain !h-[25px] w-[25px]' />}

            {avatar && (
                <Avatar
                    src={user?.photoUrl} className='object-contain !h-[25px] !w-[25px]'
                >
                    {user?.email[0].toUpperCase()}
                </Avatar>
            )}

            <h3 className='text-gray-600 group-hover:text-black text-xs font-normal'>{title}</h3>
        </div>
    )
};

export default HeaderOptions;
