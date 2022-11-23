import React from 'react';
import { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Button, Menu, MenuItem } from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

function Nav() {
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

  const handleToResources = () =>{
    setAnchorEl(null);
    history.push('/resources');
  }

  return (
    <div className="nav">


      <Link to="/home">
        <h2 className="nav-title">CraftRat</h2>
      </Link>

      <h2>Welcome, {user.username}!</h2>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuTwoToneIcon  />
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
        <MenuItem onClick={handleToResources} className="navLink"> <button className="navLink">Saved Resources </button> </MenuItem>
        <MenuItem onClick={handleClose}><LogOutButton className="navLink" /></MenuItem>
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

    </div>
  );
}

export default Nav;