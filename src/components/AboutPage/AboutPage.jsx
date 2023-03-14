import React from 'react';
import { Grid, Box, Card, CardContent, Typography, createTheme, ThemeProvider } from '@mui/material';
import image1 from '../../images/linkedin.jpeg';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
      color: 'yellow',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
      color: 'blue',
    }
  }

  theme.typography.h2 = {
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    }
  }
  return (

    // container for the entire page
    <ThemeProvider theme={theme}>
      <Grid container justifyContent={'center'}>

        {/* <Grid item xs={5}></Grid> */}
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: '1em' }}>
          <Typography variant={'h2'}>About CraftRat</Typography>
        </Grid>

        {/* <Grid item xs={2}></Grid> */}

        <Grid item xs={11} md={3.5} mb={'2em'}>
          <Card sx={{ minWidth: 350, minHeight: 350 }}>
            <CardContent>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography>
                  Technologies Used
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Javascript</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MUI</li>
                  </ul>
                </Typography>
              </Box>

              <Box>
                <Box sx={{ height: '50%', marginBottom: '20px' }}>
                  <Typography>
                    Future versions...
                  </Typography><br />
                  <Typography>
                    Future versions will integrate a calendar to alert multicrafters of upcoming events such as birthdays.
                  </Typography>
                </Box>

                <Box sx={{ height: '50%' }}>
                  <Typography>
                    Thank you...
                  </Typography><br />
                  <Typography>
                    Thank you to Prime, the Ramirez cohort, and, our instructor, Edan.
                    Special thanks to my family for their support.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>


        </Grid>

        {/* <Grid item xs={1}></Grid> */}


        <Grid item xs={11} md={3.5}>
          <Card sx={{ minWidth: 350, minHeight: 350 }}>
            <CardContent>
              <Box>
                <Typography sx={{ textAlign: 'center' }}>
                  Let's Connect!
                </Typography>
              </Box>

              <Box justifyContent={'center'}>
                <Typography>
                  LinkedIn:
                </Typography>
                <img src={image1} alt='linkedIn QR code' style={{ width: 300, height: 300 }}></img>
                <Typography mt={5} mb={5}>
                  Check out my <a href='https://github.com/CrystalRedmon'>GitHub</a>
                </Typography>

              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={3}></Grid> */}
      </Grid >
    </ThemeProvider>
  );
}

export default AboutPage;
