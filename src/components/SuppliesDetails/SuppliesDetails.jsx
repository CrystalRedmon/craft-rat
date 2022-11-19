import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


/// MUI IMPORTS
import { Button, Box, Select, MenuItem, InputLabel, Switch, Stack, ButtonGroup, Typography } from '@mui/material';

function SuppliesDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const [updateBtn, setUpdateBtn] = useState(false)



    const currentItem = useSelector(store => store.supplies.currentSupplies);
    const currentCategory = useSelector(store => store.categories.currentCategory);




    console.log('This is my currentCategory: ', currentCategory);
    console.log('This is my currentItem', currentItem);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_SUPPLIES',
            payload: `${params.id}`
        })

        dispatch({
            type: 'FETCH_CURRENT_CATEGORY',
            payload: `${params.id}`
        })
        console.log(`Is this supposed to be a string ${params.id}`)
    }, [params.id]);

    const handleDeleteItem = () => {

        dispatch({
            type: 'DELETE_ITEM',
            payload: `${params.id}`
        })
        alert('Item Successfully Deleted');
        history.push('/');

    }



    return (
        <Box className="main-container, grid-col_12"
        >

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

                    {/* DISPLAY IMAGE */}
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
                    <Box minrows={5} style={{ width: 325, backgroundColor: 'white' }}>
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

                    <InputLabel>Category</InputLabel>
                    <Box sx={{ width: '50%', backgroundColor: 'white' }}>
                        <Typography>
                            {currentCategory}
                        </Typography>
                    </Box>


                    <InputLabel>Color</InputLabel>
                    <Box sx={{ width: '50%', backgroundColor: 'white' }}>
                        <Typography>
                            {currentItem.color}
                        </Typography>
                    </Box>

                    <InputLabel>Item</InputLabel>
                    <Box sx={{ width: '50%', backgroundColor: 'white' }}>
                        <Typography>
                            {currentItem.name}
                        </Typography>
                    </Box>

                    <InputLabel>Quantity/Unit</InputLabel>
                    <Box sx={{ width: '50%', backgroundColor: 'white' }}>
                        <Typography>
                            {currentItem.quantity}
                        </Typography>
                    </Box>

                    {/* // CONDITIONAL STATEMENT TO ADDRESS SWITCH BETWEEN SCRAPS/CHECKED AND !SCRAPS/UNCHECKED */}
                    <InputLabel>Scraps</InputLabel>
                    {currentItem.scraps ?
                        <Switch checked size='medium'></Switch>
                        :
                        <Switch size='medium'></Switch>
                    }


                    <InputLabel>Notes</InputLabel>
                    <Box style={{ width: 325, backgroundColor: 'white' }} >
                        <Typography>
                            {currentItem.notes}
                        </Typography>
                    </Box>

                </Stack>



            </Stack>


            {/* ///BOX FOR NAVIGATION */}
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
                    <Button onClick={() => history.push(`/details/${params.id}/edit`)}>Edit</Button>
                    <Button onClick={handleDeleteItem}>Delete</Button>
                   
                </ButtonGroup>

            </Box>

        </Box >
    );
}

export default SuppliesDetails;
