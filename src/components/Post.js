import React, { forwardRef } from 'react';
import InputOption from './InputOption';

import Avatar from '@mui/material/Avatar';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='bg-white p-[15px] mb-[10px] rounded-[10px]'>
            {/* Post Header */}
            <div className='flex mb-[10px]'>
                <Avatar src={photoUrl} >
                    {name[0].toUpperCase()}
                </Avatar>

                {/* Post info */}
                <div className='ml-[10px]'>
                    <h2 className='text-[15px] font-bold'>{name}</h2>
                    <p className=' text-xs text-[gray]'>{description}</p>
                </div>
            </div>

            {/* Post Body */}
            <div className=' break-words'>
                <p>{message}</p>
            </div>

            {/* Post Buttons */}
            <div className='flex justify-evenly'>
                <InputOption
                    Icon={ThumbUpAltOutlinedIcon} title='Like'
                    color='gray'
                />
                <InputOption
                    Icon={ChatOutlinedIcon} title='Comment'
                    color='gray'
                />
                <InputOption
                    Icon={RepeatIcon}
                    title='Repost'
                    color='gray'
                />
                <InputOption
                    Icon={SendIcon}
                    title='Send'
                    color='gray'
                />
            </div>
        </div>
    );
});

export default Post;
