import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Box, InputLabel, Switch, TextareaAutosize, Stack, Input, ButtonGroup, } from '@mui/material';




function EditSupplies() {
    const theme = createTheme();

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useSelector(store => store.categories.currentCategory);
    const color = useSelector(store => store.colors.currentColor);
    const currentItem = useSelector(store => store.supplies.currentSupplies);
    const [scraps, setScraps] = useState(currentItem.scraps);

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
        history.push('/');
        alert('Item Successfully Updated')

    }

    return (
        //grid for the entire page
        <Box sx={{
            backgroundColor: '#DCDCDC', boxShadow: '10px 10px 5px gray', borderRadius: '10px', margin: 'auto',
            [theme.breakpoints.up('md')]:
                { width: '60%', },

            [theme.breakpoints.down('md')]:
                { width: '90%', padding: .5, }
        }}>

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
                        sx={{
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

                        <Box mt={'2.5em'} pl={'1em'}>
                            <InputLabel>Item Details</InputLabel>
                            <Box sx={{
                                 width: 325, height: 100, border: 'gray solid 1px', borderRadius: '5px', p: '5px',
                                 [theme.breakpoints.down('md')]:
                                 {
                                    width: '90%',
                                 }
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

                        <Box sx={{
                            marginTop: '5em',
                            [theme.breakpoints.down('md')]:
                                { marginTop: '1em' }
                        }}>
                            <InputLabel>Notes</InputLabel>
                            <TextareaAutosize
                                sx={{
                                    border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                                }}
                                minRows={6.5}
                                style={{ width: '90%'}}

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


