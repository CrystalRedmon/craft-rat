import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Box, Grid, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment, FormGroup } from '@mui/material';
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
        <Box>

            <form onSubmit={handleOnSubmit}>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="center"
                    alignItems="left"
                    pt={3}
                >

                    <Stack
                        id='left-inner-container'
                        pr={3}
                        
                        
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '3em'
                        }}>
                        <Box
                            m={'auto'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: '.5em'
                            }}>
                            <img src={currentItem.image} alt="" />
                        </Box>

                        <Box mt={'2.5em'}>
                            <InputLabel>Item Details</InputLabel>
                            <Box sx={{
                                width: 325, height: 75,
                                border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                            }}>
                                {currentItem.product_details}
                            </Box>
                        </Box>
                    </Stack>





                    <Stack
                        id='right-inner-container'
                        pl={'1em'}
                        sx={{
                            display: 'flex',
                            alignItems: 'left',
                            borderRadius: '3em'
                        }}>

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


                        <Box>
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
                        </Box>

                        <Box mt={'5em'}>
                            <InputLabel>Notes</InputLabel>
                            <TextareaAutosize
                                sx={{
                                    width: 325, height: 100,
                                    border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                                }}
                                minRows={5}
                                style={{ width: 325 }}

                                value={currentItem.notes}
                                onChange={(evt) => dispatch({
                                    type: 'UPDATE_EDIT_ITEM',
                                    payload: { property: 'notes', value: evt.target.value }
                                })}
                            />
                        </Box>
                    </Stack>

                </Stack>

                <Box
                    mt={6.5}
                    display='flex'
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    <ButtonGroup
                        variant='contained'
                        color={'secondary'}
                        size='medium'>

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


