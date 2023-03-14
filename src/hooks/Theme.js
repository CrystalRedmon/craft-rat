import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

function Theme() {



    const theme = createTheme({
        backgroundColor: '#DCDCDC', boxShadow: '10px 10px 5px gray', borderRadius: '10px', margin: 'auto',
        [theme.breakpoints.up('md')]:
            { width: '60%', },

        [theme.breakpoints.down('md')]:
            { width: '90%', padding: .5, }

    })









}




export default Theme;





