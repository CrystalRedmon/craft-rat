import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Menu, MenuItem, Grid, Typography } from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

function Nav() {

  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    }
  }

  theme.typography.h2 = {
    fontSize: '1rem',
    '@media(min-width: 600px)': {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    }
  }


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
      <ThemeProvider theme={theme}>
        <Grid container className="container">

          <Grid item xs={12} md={2}
            sx={{
              [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
              },
            }}>



            <Link to="/home">
              <Typography variant={'h1'} className="nav-title">CraftRat</Typography>
            </Link>

          </Grid>


          <Grid item md={9} sx={{ textAlign: 'center' }}>

            {user.username ?
              <Typography variant='h2' className='nav-title'>Welcome, {user.username}!</Typography>
              :
              <Typography variant='h2' className='greeting'>Hey, Crafter</Typography>}

          </Grid>

          <Grid item md={1} mt={1} sx={{ textAlign: 'right' }}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuTwoToneIcon sx={{ backgroundColor: 'white', borderRadius: 1 }} />
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
              <MenuItem onClick={handleToAbout}><button className="navLink">About</button> </MenuItem>

              <div>

              </div>

            </Menu>

          </Grid>


        </Grid>

      </ThemeProvider>
    </div>
  );
}

export default Nav;