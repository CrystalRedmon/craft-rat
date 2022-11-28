import React from 'react';
import { Grid, Box, Card, CardContent, Stack, Typography } from '@mui/material';


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

              <Box>
                <Typography>
                  Let's Connect!
                </Typography>

                <img src='' alt='linkedIn QR code' width='50px'></img>

                <Typography>
                  <a href='https://github.com/CrystalRedmon'>GitHub</a>
                </Typography>
              </Box>
            </Stack>

            <Stack direction={'rows'}>
              <Typography>
                <Box sx={{ width: '50%' }}>

                  <Box sx={{ height: '50%', marginBottom: '20px' }}>
                    <Typography>
                      Future versions
                    </Typography>
                    <Typography>
                      Future versions will integrate a calendar to alert multicrafters of upcoming events such as birthdays.
                    </Typography>
                  </Box>

                  <Box sx={{ height: '50%' }}>
                    <Typography>
                      Thank you...
                    </Typography>
                    <Typography>
                      Thank you to Prime, the Ramirez cohort, and, our instructor, Edan.
                      Special thanks to my family for their support.
                    </Typography>
                  </Box>

                </Box>
              </Typography>

            </Stack>



          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4.5}></Grid>



    </Grid>
  );
}

export default AboutPage;
