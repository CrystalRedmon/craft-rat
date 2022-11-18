import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment } from '@mui/material';
import { borderRadius } from '@mui/system';
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';



function EditSupplies() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories.allCategories); // UNSURE IF THIS IS NEEDED
    const currentItem = useSelector(store => store.supplies.currentSupplies);


    /// SHOULD 🛑 NOT USE BOTH USESTATE AND USESELECT. ONLY USESELECT 🛑

    console.log('Let us edit', currentItem);
    console.log('adding supplies, all categories', currentItem.id);

    /// THIS IS THE OBJECT THAT WILL CONTAIN ALL OF THE INPUT INFO. ONCE THE FORM IS COMPLETE A DISPATCH TO ADD_ITEM SHOULD BE COMPLETED
    const [scraps, setScraps] = useState(false);

    

    useEffect(() => {
        // GET CURRENT ITEM FROM THE SERVER. ALLOWS INFO TO REMAIN POPULATED EVEN ON PAGE RELOAD.
        if (params.id) {
            dispatch({
                type: 'FETCH_CURRENT_SUPPLIES',
                payload: params.id
            })
        }

        // // ⬇️ UNSURE IF THIS IS NEEDED SINCE USER WILL NOT HAVE THE OPTION TO CHANGE ITEM CATEGORY
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, [params.id]);


    const handleOnSubmit = (event) => {
        event.preventDefault();
        // THIS SENDS INFO FROM UPDATED INFO FROM REDUX STORE TO DB
        dispatch({
            type: 'SAVE_ITEM',
            payload: currentItem
        });
        console.log('inside handleSubmit: ', updateItem);

        // ⬇️ UNCOMMENT ONCE PROJECT COMPLETE
        // history.push('/');
        // alert('Item Successfully Updated')

    }


    return (
        <Box className="main-container, grid-col_12"
        >


            <form onSubmit={handleOnSubmit}>
                <Stack id='form-container'
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: 'lightgray' }}
                >

                    <Stack id='left-inner-container'
                        p={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 500,
                            height: 500,
                            borderRadius: '3em'
                        }}>

                        <Box
                            m={'auto'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 350,
                                height: 350,
                                backgroundColor: 'white',
                                borderRadius: '.5em'
                            }}><img src={currentItem.image} alt="" />

                            <Box
                                variant='filled'
                                sx={{ width: '50%', backgroundColor: 'white' }}
                                type="url"
                                placeholder='Image URL'
                            />

                        </Box>

                        <InputLabel>Item Details</InputLabel>
                        <Box minrows={5} style={{ width: 325 }}>
                            {currentItem.product_details}
                        </Box>

                    </Stack>




                    <Stack id='right-inner-container'
                        p={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 500,
                            height: 500,
                            borderRadius: '3em'
                        }}>

                        {/* EDIT OPTION UNAVAILABLE FOR CATEGORY */}
                        <select
                            required
                            value={currentItem.category}>
                            <option name="dropFrom" value="" disabled>Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>




                        {/* TODO--- POPULATE DROP DOWN USING CATEGORIES FROM DB. CATEGORIES ALREADY BROUGHT OVER FROM DB */}
                        {/* <InputLabel>Category</InputLabel>
                        <FormControl sx={{ width: '50%' }}>
                            <Select onChange={handleCategoryInput} sx={{ backgroundColor: 'white' }}> */}
                        {/* required
                            onChange={(event)=>setNewItem(event.target.value)}
                            value={newItem.category}
                        
                            <option name="dropFrom" value="" disabled>Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))} */}
                        {/* <MenuItem value={categories.id} >Needlework</MenuItem>
                                <MenuItem value={'sewing'}>Sewing</MenuItem>
                                <MenuItem value={'cricuit'}>Cricut Crafts</MenuItem>
                                <MenuItem value={'paper'}>Paper Crafts</MenuItem>
                            </Select>
                        </FormControl> */}


                        {/* EDIT OPTION UNAVAILABLE FOR COLOR */}
                        <InputLabel>Color</InputLabel>
                        <Box sx={{ width: '50%' }}>
                            <Typography>
                                {currentItem.color}
                            </Typography>
                        </Box>

                        {/* EDIT OPTION UNAVAILABLE FOR ITEM */}
                        <InputLabel>Item</InputLabel>
                        <Box sx={{ width: '50%' }}>
                            <Typography>
                                {currentItem.name}
                            </Typography>
                        </Box>

                        {/* /// QUANTITY IS EDITABLE */}
                        <InputLabel>Quantity/Unit</InputLabel>
                        <TextField
                            value={currentItem.quantity}
                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_ITEM',
                                payload: { property: 'quantity', value: evt.target.value }
                            })}
                            variant='filled'
                            sx={{ width: '50%', backgroundColor: 'white' }} />

                        {/* /// TODO ---- 🆘 SCRAPS IS EDITABLE BUT NOT FUNCTIONAL YET */}
                        <InputLabel>Scraps</InputLabel>
                        <Switch size='medium'></Switch>

                        {/* /// NOTES ARE EDITABLE */}
                        <InputLabel>Notes</InputLabel>
                        <TextareaAutosize
                            value={currentItem.notes}
                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_ITEM',
                                payload: { property: 'notes', value: evt.target.value }
                            })}
                            minRows={5}
                            style={{ width: 325 }} />

                    </Stack>



                </Stack>

                <Box
                    mt={3}
                    display='flex'
                    sx={{
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <ButtonGroup

                        variant='contained'
                        color={'secondary'}
                        size='large'>

                        <Button onClick={() => history.push('/')}>Back To List</Button>

                        <Button type='submit'>Update</Button>

                        <Button onClick={() => history.push(`/details/${params.id}`)}>Cancel</Button>

                    </ButtonGroup>

                </Box>
            </form>
        </Box>

    )
}

export default EditSupplies;

