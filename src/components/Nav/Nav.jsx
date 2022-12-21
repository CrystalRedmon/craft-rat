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

  const handleToAbout = () => {
    setAnchorEl(null);
    history.push('./about')

  }

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch({
      type: 'LOGOUT'
    })
    history.push('/login')

  }


  return (
    <div className="nav">

      <Grid container className="container">

        <Grid item xs={2}>
          <Link to="/home">
            <h2 className="nav-title">CraftRat</h2>
          </Link>



        </Grid>


        <Grid item xs={9} sx={{ textAlign: 'center' }}>

          {user.username ?
            <h2 class='nav-title'>Welcome, {user.username}!</h2>
            :
            <h2 class='greeting'>Hey, Crafter</h2>}

        </Grid>

        <Grid item xs={1} mt={1} sx={{ textAlign: 'right' }}>
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
            {user.id ?
              <>
                <MenuItem onClick={handleToAdd}> <button className="navLink">Add Items</button> </MenuItem>
                <MenuItem onClick={handleLogout}><button className="navLink">Logout</button ></MenuItem>

              </>
              :
              (
                // If there's no user, show login/registration links
                <MenuItem onClick={() => { history.push('/login'), setAnchorEl(null); }} className="navLink">
                  Login / Register
                </MenuItem>
              )}
            <MenuItem onClick={handleToAbout}> <button className="navLink">About</button> </MenuItem>

            <div>

            </div>

          </Menu>

        </Grid>


      </Grid>


    </div>
  );
}

export default Nav;