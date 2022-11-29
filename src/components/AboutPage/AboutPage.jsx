import React from 'react';
import { Grid, Box, Card, CardContent, Typography } from '@mui/material';
import image1 from '../../images/linkedin.jpeg';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (

    // container for the entire page
    <Grid container>

      <Grid item xs={5}></Grid>
      <Grid item xs={7}>
        <h1>About CraftRat</h1>
      </Grid>

      <Grid item xs={2}></Grid>

      <Grid item xs={3.5}>
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

      <Grid item xs={1}></Grid>


      <Grid item xs={3.5}>
        <Card sx={{ minWidth: 350, minHeight: 350 }}>
          <CardContent>
            <Box>
              <Typography sx={{textAlign: 'center'}}>
                Let's Connect!
              </Typography>          
            </Box>

            <Box ml={5}>
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
      <Grid item xs={3}>

      </Grid>
    </Grid >
  );
}

export default AboutPage;
