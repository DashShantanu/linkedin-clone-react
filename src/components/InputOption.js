import React from 'react';

const InputOption = ({ Icon, title, color }) => {
    return (
        <div className='flex items-center mt-4 p-[10px] cursor-pointer hover:bg-[whitesmoke] hover:rounded-[10px] '>
            <Icon style={{ color: color }} />
            <h4 className=' font-semibold text-[gray] ml-[5px]'>{title}</h4>
        </div>
    );
};

export default InputOption;
