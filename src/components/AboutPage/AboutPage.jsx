import React from 'react';
import { Grid, Box, Card, CardContent, Stack, Typography } from '@mui/material';
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


      <Grid item xs={2.5}></Grid>
      <Grid container item xs={5}>
        <Card sx={{ minWidth: 800, minHeight: 500 }}>
          <CardContent>

            <Stack direction={'rows'}>
              <Box sx={{ width: '50%', marginBottom: '20px' }}>
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

              <Box sx={{ width: '10%' }}></Box>

              <Box alignItems={'center'}>
                <Typography>
                  Let's Connect!
                </Typography>
                <img src={image1} alt='linkedIn QR code' style={{ width: 200, height: 200 }}></img>
              </Box>
            </Stack>

            <Stack direction={'rows'}>

              <Box sx={{ width: '50%' }}>

                <Box sx={{ height: '50%', marginBottom: '20px' }}>
                  <Typography>
                    Future versions
                  </Typography><br/>
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
              <Box sx={{width: '10%'}}></Box>
              <Box mt={5}>
                <Typography>
                  Check out my <a href='https://github.com/CrystalRedmon'>GitHub</a>
                </Typography>
              </Box>


            </Stack>



          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4.5}></Grid>



    </Grid>
  );
}

export default AboutPage;
