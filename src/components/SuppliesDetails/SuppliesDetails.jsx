import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function SuppliesDetails(){
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch({
            type:'FETCH_CURRENT_SUPPLIES',
            payload: `${params.id}`
        })

    }, [params.id])

    return(<>
    
    <h1>This is where the details will go</h1>
        
    </>)
}

export default SuppliesDetails;

