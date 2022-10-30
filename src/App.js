import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

const App = () => {
  return (
    <div className="flex flex-col items-center bg-[#f3f2ef]">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className='w-full flex'>
        <Sidebar />

        <Feed />

        {/* Widgets */}
      </div>
    </div>
  );
};

export default App;
