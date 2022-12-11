import { Box, TextField, Select, MenuItem, InputLabel, FormControl, FormGroup, Switch, TextareaAutosize, Stack, Input, Button, ButtonGroup, InputAdornment, Checkbox } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';



function SearchOption() {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories.allCategories);
    const colors = useSelector(store => store.colors.allColors);


    const [filter, setFilter] = useState({
        "categories_id": 0,
        color: '',
        scraps: false,
    })

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })

        dispatch({
            type: 'FETCH_COLORS'
        })

    }, []);

    const handleSubmitFilter = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'FETCH_FILTERED_LIST',
            payload: filter
        })


    }

    

    return (<>


        <Box className="main-container, grid-col_12" mb={4}>

            <h2>Filter Supplies</h2>
            <Stack id='search-container'
                spacing={3}
                sx={{ width: '100%', margin: 'auto' }}

            // TODO--- THIS SEARCH PAGE SHOULD LIKE SIMILAR TO THE ADD FORM WITH GRAY IN MIDDLE 
            >
                
                <Stack id='search-bar'
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <InputLabel>Input Description</InputLabel>
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

                <form onSubmit={handleSubmitFilter}>
                    <Stack id='filter-options'
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>

                        <label>Category</label>
                        <select
                            required
                            onChange={(evt) => setFilter({ ...filter, categories_id: evt.target.value })}
                            value={filter.category}>
                            <option
                                name="dropFrom"
                                value=""
                                >Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>

                        <label>Colors</label>
                        <select
                            required
                            onChange={(evt) => setFilter({ ...filter, color: evt.target.value })}
                            value={colors.name}
                        >
                            <option name="dropFrom" value="" >Select a category</option>
                            {colors.map(color => (
                                <option key={color.id} value={color.id}>{color.name}</option>
                            ))}
                        </select>


                        <label>Scraps</label>
                        {filter.scraps === false ?
                            <Switch
                                defaultChecked={filter.scraps}
                                onChange={() => setFilter({ ...filter, scraps: true })}
                                size='medium'></Switch>
                            :
                            <Switch
                                defaultChecked={filter.scraps}
                                onChange={() => setFilter({ ...filter, scraps: false })}
                                size='medium'></Switch>
                        }

                        <Button
                            type="submit"
                            variant='contained'
                            color={'secondary'}
                            size='small'>
                            Filter
                        </Button>

                    </Stack>
                </form>




            </Stack>
        </Box>

    </>)
}

export default SearchOption;