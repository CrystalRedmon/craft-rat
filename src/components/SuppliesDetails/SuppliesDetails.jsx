import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


/// MUI IMPORTS
import { Grid, Button, Box, Select, MenuItem, InputLabel, Switch, Stack, ButtonGroup, Typography, Paper, Label } from '@mui/material';

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
        <Grid container sx={8} spacing={3}>

            <Grid container >

                {/* DISPLAY IMAGE */}

                <Grid item xs={3}></Grid>

                <Grid item xs={4} pt={4}>
                    <Box
                        sx={{
                            width: 300,
                            height: 300,
                        }}>
                        <img src={currentItem.image} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={3} pt={15} >

                    <Typography sx={{ lineHeight: '1rem' }}>
                        <p>Category: <span>{currentCategory}</span></p>
                        <p>Color: {currentColor}</p>
                        <p>Item: {currentItem.name}</p>
                        <p>Quantity/Unit: {currentItem.quantity}</p>
                    </Typography>


                    {/* // CONDITIONAL STATEMENT TO ADDRESS SWITCH BETWEEN SCRAPS/CHECKED AND !SCRAPS/UNCHECKED */}
                    Scraps: {currentItem.scraps ?
                        <Switch checked size='medium'></Switch>
                        :
                        <Switch size='medium'></Switch>
                    }
                </Grid>
                <Grid item xs={5}></Grid>

            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>

            <Grid container>

                <Grid item xs={3}></Grid>

                <Grid item xs={4} >
                    <InputLabel>Item Details</InputLabel>
                    <Box sx={{ width: 325, height:100, border: 'gray solid 1px', borderRadius: '5px', p: '5px'}}>
                        {currentItem.product_details}
                    </Box>
                </Grid>


                <Grid item xs={4}>
                    <InputLabel>Notes</InputLabel>
                    <Box sx={{ width: 325, height:100, border: 'gray solid 1px', borderRadius: '5px', p: '5px'}} >
                        <Typography>
                            {currentItem.notes}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>


          
            <Grid item xs={12}></Grid>




            <Grid container>
                <Grid item xs={4.5}></Grid>
                <Grid item xs={3}>
                    <ButtonGroup
                        variant='contained'
                        color={'secondary'}
                        size='medium'>
                        <Button onClick={() => history.push('/')}>Back To List</Button>
                        <Button onClick={() => history.push(`/details/${params.id}/edit`)}>Edit</Button>
                        <Button onClick={handleDeleteItem}>Delete</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={4.5}></Grid>
            </Grid>

        </Grid >
    );
}

export default SuppliesDetails;
