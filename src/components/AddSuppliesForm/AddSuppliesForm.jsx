import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Box, InputLabel, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment } from '@mui/material';
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';



function AddSuppliesForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories.allCategories);
    const colors = useSelector(store => store.colors.allColors);


    console.log('adding supplies, all colors', colors);
    console.log('adding supplies, all categories', categories);

    /// THIS IS THE OBJECT THAT WILL CONTAIN ALL OF THE INPUT INFO. ONCE THE FORM IS COMPLETE A DISPATCH TO ADD_ITEM SHOULD BE COMPLETED
    const [newItem, setNewItem] = useState({
        category: '',
        color_id: '',
        name: '',
        product_details: '',
        notes: '',
        scraps: false,
        quantity: '',
        image: '',
    })

    useEffect(() => {

        dispatch({
            type: 'FETCH_CATEGORIES'
        })

        dispatch({
            type: 'FETCH_COLORS'
        })
    }, []);


    const handleImageInput = (event) => {
        setNewItem({
            ...newItem,
            image: event.target.value
        });
        console.log(newItem);
    };

    const handleProductDetailsInput = (event) => {
        setNewItem({
            ...newItem,
            product_details: event.target.value
        });
        console.log(newItem);
    };


    const handleCategoryInput = (event) => {
        setNewItem({
            ...newItem,
            category: event.target.value
        });
        console.log(newItem);
    }

    const handleColorInput = (event) => {
        setNewItem({
            ...newItem,
            color_id: event.target.value
        })
        console.log(newItem);
    }

    const handleNameInput = (event) => {
        setNewItem({
            ...newItem,
            name: event.target.value
        });
        console.log(newItem);
    }

    const handleQuantityInput = (event) => {
        setNewItem({
            ...newItem,
            quantity: event.target.value
        });
        console.log(newItem);
    }

    /// TODO--- HOW TO HANDLE SCRAPS BOOLEAN IF TRUE WHEN NEW ITEM INPUT?????

    const handleNotesInput = (event) => {
        setNewItem({
            ...newItem,
            notes: event.target.value
        });
        console.log(newItem);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_NEW_ITEM',
            payload: newItem
        });
        console.log('inside handleSubmit: ', newItem);
        history.push('/');
        alert('New Item Successfully Added');


    }


    return (

        <Box sx={{backgroundColor: '#DCDCDC', width: '60%', boxShadow: '10px 10px 5px gray', margin: 'auto', borderRadius: '10px'}}>

            <form onSubmit={handleOnSubmit}>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="center"
                    alignItems="center"
                >

                    <Stack id='left-inner-container'
                        p={3}
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
                                width: 300,
                                height: 300,
                                backgroundColor: 'white',
                                borderRadius: '.5em'
                            }}>

                            <Input
                                required
                                onChange={handleImageInput}
                                variant='filled'
                                sx={{ width: '50%', backgroundColor: 'white' }}
                                type="url"
                                placeholder='Image URL'
                                endAdornment={<InputAdornment>
                                    <InsertPhotoTwoToneIcon /></InputAdornment>}
                            />

                        </Box>

                        <Box mt={'3em'}>
                            <InputLabel>Item Details</InputLabel>
                            <TextareaAutosize onChange={handleProductDetailsInput} minRows={5} style={{ width: 325 }} />
                        </Box>
                    </Stack>

                    <Stack
                        id='right-inner-container'
                        p={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'left',
                            borderRadius: '3em'
                        }}>

                        <p>Category:
                            <select
                                required
                                onChange={handleCategoryInput}
                                value={newItem.category}>
                                <option
                                    name="dropFrom"
                                    value=""
                                    disabled>Select a category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </p>
                        <p>Colors:
                            <select
                                required
                                onChange={handleColorInput}
                                value={newItem.color_id}>
                                <option name="dropFrom" value="" disabled>Select a color</option>
                                {colors.map(color => (
                                    <option key={color.id} value={color.id}>{color.name}</option>
                                ))}
                            </select>
                        </p>
                        <p>Item:
                            <TextareaAutosize
                                onChange={handleNameInput} variant='filled'
                                sx={{
                                    width: 325, height: 100,
                                    border: 'gray solid 1px', borderRadius: '5px', p: '5px'
                                }} />
                        </p>

                        <p>Quantity/Unit:
                            <TextareaAutosize onChange={handleQuantityInput} variant='filled' sx={{ width: '50%', backgroundColor: 'white' }} />
                        </p>

                        <p>
                            Scraps:
                            <Switch size='medium'></Switch>
                        </p>


                        <Box mt={7}>
                            <InputLabel>Notes</InputLabel>
                            <TextareaAutosize onChange={handleNotesInput} minRows={5} style={{ width: 325 }} />

                        </Box>


                    </Stack>



                </Stack>

                <Box
                    mt={3}
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

                        <Button type='submit'>Add</Button>

                        <Button>Cancel</Button>

                    </ButtonGroup>
                </Box>
            </form>
        </Box>

    )
}

export default AddSuppliesForm;
