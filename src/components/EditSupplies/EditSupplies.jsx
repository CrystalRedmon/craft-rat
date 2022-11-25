import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Grid, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment, FormGroup } from '@mui/material';
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


    /////REMEMBER TO ADD THE FORM BACK IN!!!!!!!!

    return (
        //grid for the entire page
        <Grid container sx={8} spacing={3}>

            
                {/* //This this the top row. contains picture, colors, cat, etc */}
                
                <Grid container>


                    <Grid item xs={3}></Grid>


                    <Grid item sx={4} pt={4}>
                        <Stack
                            sx={{
                                width: 300,
                                height: 300
                            }}>
                            <img src={currentItem.image} alt="" />
                        </Stack>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={3} pt={15}>
                        <Stack>


                            <Typography sx={{ lineHeight: '1rem' }}>
                                <p>Category: {category} </p>
                                <p>Color: {color}</p>
                                <p>Item: {currentItem.name}</p>

                                <p>Quantity/Unit: <input
                                    value={currentItem.quantity}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_ITEM',
                                        payload: { property: 'quantity', value: evt.target.value }
                                    })}
                                    variant='filled'
                                    sx={{ width: '50%', backgroundColor: 'white' }} /></p>

                            </Typography>
                        </Stack>
                        <Stack>
                            Scraps: {currentItem.scraps === true ?
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
                        </Stack>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>

                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                        <InputLabel>Item Details</InputLabel>
                        <Stack
                            sx={{
                                width: 325, height: 100,
                                border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                            }}
                        >
                            {currentItem.product_details}
                        </Stack>

                    </Grid>

                    <Grid item xs={4}>

                        <InputLabel>Notes</InputLabel>
                        <Stack>
                            <TextareaAutosize
                                sx={{
                                    width: 325, height: 100,
                                    border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                                }}
                                p={0}
                                minRows={5}
                                style={{ width: 325 }}

                                value={currentItem.notes}
                                onChange={(evt) => dispatch({
                                    type: 'UPDATE_EDIT_ITEM',
                                    payload: { property: 'notes', value: evt.target.value }
                                })}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid container>
                    <Grid item xs={4.5}></Grid>
                    <Grid item xs={3}>
                        <Stack>
                            <ButtonGroup
                                variant='contained'
                                color={'secondary'}
                                size='medium'>

                                <Button onClick={() => history.push('/')}>Back To List</Button>

                                <Button type='submit'>Update</Button>

                                <Button onClick={() => history.push(`/details/${params.id}`)}>Cancel</Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                    <Grid item xs={4.5}></Grid>
                </Grid>
                
            
        </Grid>
    )
}

export default EditSupplies;


