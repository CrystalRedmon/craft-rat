import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Menu, MenuItem, Grid } from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleToAdd = () => {
    setAnchorEl(null);
    history.push('/form');
  }

  const handleToResources = () => {
    setAnchorEl(null);
    history.push('/resources');
  }

const handleToAbout =() =>{
  setAnchorEl(null);
  history.push('./about')

}

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT'
    })

  }





  return (
    <div className="nav">

      <Grid container className="container">

        <Grid item xs={3.5}>
          <Link to="/home">
            <h2 className="nav-title">CraftRat</h2>
          </Link>
        </Grid>


        <Grid item xs={5} sx={{textAlign: 'center'}}>

          {user.username ?
            <h2 class='nav-title'>Welcome, {user.username}!</h2>
            :
            <h2 class='greeting'>Hey, Crafter</h2>}

        </Grid>

        <Grid item xs={3.5} mt={1} sx={{textAlign: 'right'}}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuTwoToneIcon />
          </Button>

          <Menu
            
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleToAdd}> <button className="navLink">Add Items</button> </MenuItem>
            {/* <MenuItem onClick={handleToResources}> <button className="navLink">Saved Resources </button> </MenuItem> */}
            <MenuItem onClick={handleToAbout}> <button className="navLink">About</button> </MenuItem>
            <MenuItem onClick={handleLogout}><button className="navLink">Logout</button ></MenuItem>
            <div>
              {/* If no user is logged in, show these links */}
              {!user.id && (
                // If there's no user, show login/registration links
                <Link className="navLink" to="/login">
                  Login / Register
                </Link>
              )}

              {/* If a user is logged in, show these links
          {user.id && (
            <>
              <Link className="navLink" to="/user">
                Home
              </Link>

              <Link className="navLink" to="/info">
                Info Page
              </Link>

              <LogOutButton className="navLink" />
            </>
          )}

          <Link className="navLink" to="/about">
            About
          </Link> */}
            </div>

          </Menu>

        </Grid>


      </Grid>


    </div>
  );
}

export default Nav;