import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///MUI IMPORT COMPONENTS 
import Button from '@mui/material/Button';
import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Switch, TextareaAutosize, Stack, Input, ButtonGroup, InputAdornment } from '@mui/material';
import { borderRadius } from '@mui/system';
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';



function AddSuppliesForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    category: '',
    color: '',
    name:  '',
    product_details:  '',
    notes: '',
    scraps: false,
    quantity: '',
    image: '',
  })
  
  useEffect(()=>{

    dispatch({
        type: 'FETCH_CATEGORIES'
    })
  }, [])















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
            }}>

            <Input
              variant='filled'
              sx={{ width: '50%', backgroundColor: 'white' }}
              type="url"
              placeholder='Image URL'
              endAdornment={<InputAdornment>
                <InsertPhotoTwoToneIcon/></InputAdornment>}
            />

          </Box>

          <InputLabel>Item Details</InputLabel>
          <TextareaAutosize minRows={5} style={{ width: 325 }} />

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
          <FormControl sx={{ width: '50%' }}>
            <Select sx={{ backgroundColor: 'white' }}>
              <MenuItem value={'needlework'} >Needlework</MenuItem>
              <MenuItem value={'sewing'}>Sewing</MenuItem>
              <MenuItem value={'cricuit'}>Cricut Crafts</MenuItem>
              <MenuItem value={'paper'}>Paper Crafts</MenuItem>
            </Select>
          </FormControl>

          <InputLabel>Color</InputLabel>
          <FormControl sx={{ width: '50%' }}>
            <Select sx={{ backgroundColor: 'white' }}>
              <MenuItem value={'red'}>Red</MenuItem>
              <MenuItem value={'yellow'}>Yellow</MenuItem>
              <MenuItem value={'orange'}>Orange</MenuItem>
              <MenuItem value={'green'}>green</MenuItem>
            </Select>
          </FormControl>

          <InputLabel>Item</InputLabel>
          <TextField variant='filled' sx={{ width: '50%', backgroundColor: 'white' }} />

          <InputLabel>Quantity/Unit</InputLabel>
          <TextField variant='filled' sx={{ width: '50%', backgroundColor: 'white' }} />

          <InputLabel>Scraps</InputLabel>
          <Switch size='medium'></Switch>

          <InputLabel>Notes</InputLabel>
          <TextareaAutosize minRows={5} style={{ width: 325 }} />

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

          <Button onClick={()=>history.push('/')}>Back To List</Button>

          <Button
          >Update</Button>

          <Button
          >Cancel</Button>

        </ButtonGroup>

      </Box>

    </Box>
  )
}

export default AddSuppliesForm;
