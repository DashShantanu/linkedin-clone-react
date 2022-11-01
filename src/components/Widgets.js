import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className='flex cursor-pointer p-[10px] hover:bg-[whitesmoke]'>
            <div className='mr-[5px]'>
                <FiberManualRecordIcon color='primary' />
            </div>

            <div className='flex-1'>
                <h4 className='text-sm'>{heading}</h4>
                <p className='text-xs text-[gray]'>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='sticky top-20 basis-1/5 bg-white rounded-[10px] border-[1px] border-solid border-[lightgray] h-fit pb-[10px]'>
            <div className='flex items-center content-between p-[10px]'>
                <h2 className='font-semibold text-4'>LinkedIn News
                </h2>

                <InfoIcon fontSize='15px' />
            </div>

            {newsArticle('Twitter plans layoffs: Reports', 'Top news - 197,717 readers')}
            {newsArticle('India to see highest pay hikes', 'Corporate - 18,906 readers')}
            {newsArticle('SaaS the way to go', 'Code - 8,758 readers')}
            {newsArticle('Pay transparency: Yay or nay?', 'Economy - 5,352 readers')}
            {newsArticle('WFH affecting employee health', 'Health - 2,230 readers')}
        </div>
    );
};

export default Widgets;
