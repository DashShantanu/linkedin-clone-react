import React, { useState, useEffect } from 'react';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Shantanu Dash',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };

    return (
        <div className='flex-[0.6] my-0 mx-5'>
            {/* Input Container */}
            <div className='bg-white p-[10px] pb-5 rounded-[10px] mb-5'>
                {/* Input */}
                <div className='border-[1px] border-solid border-[lightgray] rounded-[30px] flex p-[10px] text-[gray] pl-[15px]'>
                    <CreateIcon />

                    <form className='flex w-full'>
                        <input
                            type='text'
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className=' border-none flex-[1] ml-[10px] outline-0 font-semibold'
                        />
                        <button
                            type='submit'
                            className='hidden'
                            onClick={sendPost}
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Input Options */}
                <div className='flex justify-evenly'>
                    <InputOption
                        Icon={ImageIcon}
                        title='Photo'
                        color='#70B5F9'
                    />

                    <InputOption
                        Icon={SubscriptionIcon}
                        title='Video'
                        color='#E7A33E'
                    />

                    <InputOption
                        Icon={EventNoteIcon}
                        title='Event'
                        color='#C0CBCD'
                    />

                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title='Write article'
                        color='#7FC15E'
                    />
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                />
            ))}

        </div>
    );
};

export default Feed;
