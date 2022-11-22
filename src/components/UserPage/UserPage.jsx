import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import SuppliesList from '../SuppliesList/SuppliesList';
import SearchOption from '../SearchOption/SearchOption';
import { Stack } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>


      <div className="container">
        <Stack spacing={3}
          sx={{ width: '75%', margin: 'auto' }}>

          <Stack
            spacing={3}
            sx={{ width: '25%', margin: 'auto' }}>
            <h2>Welcome, {user.username}!</h2>
            
          </Stack>


          <SearchOption />
          <SuppliesList />
          <LogOutButton className="btn" />
        </Stack>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
