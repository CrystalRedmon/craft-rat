import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Grid, Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, FormGroup, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment } from '@mui/material';
import { borderRadius } from '@mui/system';
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';



function EditSupplies() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useSelector(store => store.categories.currentCategory);
    const color = useSelector(store => store.colors.currentColor);
    const currentItem = useSelector(store => store.supplies.currentSupplies);
    const [scraps, setScraps] = useState(currentItem.scraps);


    console.log('Let us edit', currentItem);
    console.log('this is my scrap status', currentItem.scraps);
    /// SHOULD 🛑 NOT USE BOTH USESTATE AND USESELECT. ONLY USESELECT 🛑


    console.log('adding supplies, all categories', currentItem.id);

    /// THIS IS THE OBJECT THAT WILL CONTAIN ALL OF THE INPUT INFO. ONCE THE FORM IS COMPLETE A DISPATCH TO ADD_ITEM SHOULD BE COMPLETED




    useEffect(() => {
        // GET CURRENT ITEM FROM THE SERVER. ALLOWS INFO TO REMAIN POPULATED EVEN ON PAGE RELOAD.
        if (params.id) {
            dispatch({
                type: 'FETCH_CURRENT_SUPPLIES',
                payload: params.id
            })
        }


        dispatch({
            type: 'FETCH_CURRENT_CATEGORY'
        })
    }, [params.id]);


    const handleOnSubmit = (event) => {
        event.preventDefault();
        // THIS SENDS INFO FROM UPDATED INFO FROM REDUX STORE TO DB
        dispatch({
            type: 'SAVE_ITEM',
            payload: currentItem
        });
        console.log('inside handleSubmit: ', currentItem);
        history.push('/');
        alert('Item Successfully Updated')

    }


    return (
        <Grid container spacing={3}>

            <Grid container>
                <Grid item xs={2}></Grid>


                <Grid item xs={5} >
                    <Box
                        sx={{
                            width: 350,
                            height: 350
                        }}>
                        <img src={currentItem.image} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={3} pt={15}>
                     <Typography sx={{ lineHeight: '1rem' }}>


                    </Typography>

                </Grid>




            </Grid>





            <InputLabel>Category</InputLabel>
            <Box sx={{ width: '50%' }}>
                <Typography>
                    {category}
                </Typography>
            </Box>



            {/* EDIT OPTION UNAVAILABLE FOR COLOR */}
            <InputLabel>Color</InputLabel>
            <Box sx={{ width: '50%' }}>
                <Typography>
                    {color}
                </Typography>
            </Box>

            {/* EDIT OPTION UNAVAILABLE FOR ITEM */}
            <InputLabel>Item</InputLabel>
            <Box sx={{ width: '50%' }}>
                <Typography>
                    {currentItem.name}
                </Typography>
            </Box>

            <form onSubmit={handleOnSubmit}>
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



                <InputLabel>Scraps</InputLabel>
                {currentItem.scraps === true ?
                    <Switch
                        defaultChecked={currentItem.scraps}
                        onChange={() => dispatch({
                            type: 'UPDATE_EDIT_ITEM',
                            payload: { property: 'scraps', value: false }
                        })}
                        size='medium'></Switch>
                    :
                    <Switch
                        defaultChecked={currentItem.scraps}
                        onChange={() => dispatch({
                            type: 'UPDATE_EDIT_ITEM',
                            payload: { property: 'scraps', value: true }
                        })}
                        size='medium'></Switch>
                }



                <InputLabel>Item Details</InputLabel>
                <Box class="textbox">
                    {currentItem.product_details}
                </Box>

                {/* /// NOTES ARE EDITABLE */}
                <InputLabel>Notes</InputLabel>
                <textarea
                    class="textbox"
                    value={currentItem.notes}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_ITEM',
                        payload: { property: 'notes', value: evt.target.value }
                    })}
                    minRows={5}
                    style={{ width: 325 }} />





                {/* </Stack> */}

                <Grid container>
                    <Grid item xs={5.5}></Grid>
                    <Grid item xs={4}>
                        <ButtonGroup
                            variant='contained'
                            color={'secondary'}
                            size='medium'>
                            <Button onClick={() => history.push('/')}>Back To List</Button>
                            <Button type='submit'>Update</Button>
                            <Button onClick={() => history.push(`/details/${params.id}`)}>Cancel</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </form>
        </Grid>

    )
}

export default EditSupplies;

