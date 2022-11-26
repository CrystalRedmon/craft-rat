import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


/// MUI IMPORTS
import { Button, Box, InputLabel, Switch, Stack, ButtonGroup, Typography} from '@mui/material';

function SuppliesDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const [updateBtn, setUpdateBtn] = useState(false)



    const currentItem = useSelector(store => store.supplies.currentSupplies);
    const currentCategory = useSelector(store => store.categories.currentCategory);
    const currentColor = useSelector(store => store.colors.currentColor)




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

        dispatch({
            type: 'FETCH_CURRENT_COLOR',
            payload: `${params.id}`

        });
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
        <Box>



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
                        sx={{
                            width: 300,
                            height: 300,
                        }}>
                        <img src={currentItem.image} alt="" />
                    </Box>

                    <Box mt={'2.5em'}>
                        <InputLabel>Item Details</InputLabel>
                        <Box sx={{ width: 325, height: 75, border: 'gray solid 1px', borderRadius: '5px', p: '5px' }}>

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


                    <p>Category: {currentCategory}</p>
                    <p>Color: {currentColor}</p>
                    <p>Item: {currentItem.name}</p>
                    <p>Quantity/Unit: {currentItem.quantity}</p>



                    <Box>
                        Scraps: {currentItem.scraps ?
                            <Switch checked size='medium'></Switch>
                            :
                            <Switch size='medium'></Switch>
                        }
                    </Box>

                    <Box mt={'6em'}>
                        <InputLabel>Notes</InputLabel>
                        <Box sx={{ width: 325, height: 75, border: 'gray solid 1px', borderRadius: '5px', p: '5px' }} >
                            <Typography>
                                {currentItem.notes}
                            </Typography>
                        </Box>
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
                        <Button onClick={() => history.push(`/details/${params.id}/edit`)}>Edit</Button>
                        <Button onClick={handleDeleteItem}>Delete</Button>
                    </ButtonGroup>
            </Box>
        </Box >
    );
}

export default SuppliesDetails;
