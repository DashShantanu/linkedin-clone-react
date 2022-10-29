import React from 'react';
import { Avatar } from '@mui/material';

const HeaderOptions = ({ avatar, Icon, title }) => {
    return (
        <div className='group flex flex-col items-center mr[20px] cursor-pointer'>
            {Icon && <Icon color='action' className='group-hover:fill-black object-contain !h-[25px] w-[25px]' />}

            {avatar && (<Avatar src={avatar} className='object-contain !h-[25px] !w-[25px]' />)}

            <h3 className='text-gray-600 group-hover:text-black text-xs font-normal'>{title}</h3>
        </div>
    )
};

export default HeaderOptions;
