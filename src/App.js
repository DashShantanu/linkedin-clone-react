import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice.js';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice.js';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    });

  }, []);

  return (
    <div className="flex flex-col items-center bg-[#f3f2ef]">
      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        <div className=' max-w-[1200px] flex mt-[35px] mx-auto'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

    </div>
  );
};

export default App;
