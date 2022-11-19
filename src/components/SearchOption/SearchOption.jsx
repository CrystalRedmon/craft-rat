import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, Button, ButtonGroup, InputAdornment, Checkbox } from '@mui/material';



function SearchOption(){

    return(<>
    

    <Box className="main-container, grid-col_12">

            <h2>Search Form</h2>
            <Stack id='search-container'
                spacing={3}
                sx={{ width: '100%', margin: 'auto' }}

            // TODO--- THIS SEARCH PAGE SHOULD LIKE SIMILAR TO THE ADD FORM WITH GRAY IN MIDDLE 
            >
                <Stack id='search-bar'
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    {/* <InputLabel>Input Description</InputLabel> */}
                    <TextField
                        sx={{ width: '75%', margin: 'auto' }}
                        placeholder='Input Description'
                        variant='outlined' />

                    <Button
                        sx={{ width: '10%', margin: 'auto' }}
                        variant='contained'
                        color={'secondary'}
                        size='small'>Search
                    </Button>
                </Stack>

                <Stack id='filter-options'
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>

                    <InputLabel>Category</InputLabel>
                    <FormControl sx={{ width: '25%' }}>
                        <Select sx={{ backgroundColor: 'white' }}>
                            <MenuItem value={'needlework'} >Needlework</MenuItem>
                            <MenuItem value={'sewing'}>Sewing</MenuItem>
                            <MenuItem value={'cricuit'}>Cricut Crafts</MenuItem>
                            <MenuItem value={'paper'}>Paper Crafts</MenuItem>
                        </Select>
                    </FormControl>

                    <InputLabel>Color</InputLabel>
                    <FormControl sx={{ width: '25%' }}>
                        <Select sx={{ backgroundColor: 'white' }}>
                            <MenuItem value={'red'}>Red</MenuItem>
                            <MenuItem value={'yellow'}>Yellow</MenuItem>
                            <MenuItem value={'orange'}>Orange</MenuItem>
                            <MenuItem value={'green'}>green</MenuItem>
                        </Select>
                    </FormControl>


                    <InputLabel>Scraps</InputLabel>
                    <Switch size='medium'></Switch>

                    <Button
                        variant='contained'
                        color={'secondary'}
                        size='small'>
                        Filter
                    </Button>




                </Stack>





            </Stack>
        </Box>
    
    </>)
}

export default SearchOption;