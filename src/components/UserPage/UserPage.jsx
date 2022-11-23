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


      <div className="container, homepage_container">
        <Stack 
          sx={{ width: '75%', margin: 'auto' }}>
          <SearchOption />
          <SuppliesList />
          
        </Stack>
        
      </div>
      <div>
        <LogOutButton className="btn" />
      </div>
      
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
