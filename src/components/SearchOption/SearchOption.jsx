import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, Button, ButtonGroup, InputAdornment, Checkbox } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';



function SearchOption() {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories.allCategories);
    const [filter, setFilter] = useState({
        "categories_id": 0,
        color: '',
        scraps: false,
    })

    console.log('SEARCH. THESE ARE MY CATEGORIES: ', categories);

    console.log("I'm filtering now: ", filter);



    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, []);



    const handleSubmitFilter =(evt)=>{
        evt.preventDefault();

        dispatch({
            type: 'FETCH_FILTERED_LIST',
            payload: filter
        })


    }

    return (<>


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
                    <form onSubmit={handleSubmitFilter}>
                        <InputLabel>Category</InputLabel>
                        {/* TODO---- CREATE FILTER SUBMIT BUTTON TO FETCH_FILTERED_LIST */}

                        <select
                            required
                            onChange={(evt) => setFilter({ ...filter, categories_id: evt.target.value })}
                            value={categories.name}
                        >
                            <option name="dropFrom" value="" disabled>Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                     <button type="submit">Filter</button>
                    </form>

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