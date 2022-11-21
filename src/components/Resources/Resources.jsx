import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Stack} from '@mui/material';
import ResourcesListItem from '../ResourcesListItem/ResourcesListItem';



function Resources(){
    const dispatch = useDispatch();
    const resources = useSelector(store=> store.resources.allResources);
    console.log('ResourcesList 📰: ', resources)
    

    useEffect(()=>{
        dispatch({
            type: 'FETCH_RESOURCES'
        })

        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, []);



    return(<>
    
    <Box className="main-container, grid-col_12">

        
        <Stack id='form-container'
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: 'lightgray' }}
            >
            <table width={'50%'}>
                <thead>
                    <tr>
                        <td>Resources</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                {resources.map((resource, i) => {
                        return <tr key={i}><ResourcesListItem resource={resource} /></tr>
                    })}


                </tbody>

            </table>

                    </Stack>
        </Box>
    
    </>)
};

export default Resources