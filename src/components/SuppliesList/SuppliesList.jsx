import {useEffect} from 'react';
import {useDispatch} from 'react-redux';


function SuppliesList(){
    const dispatch = useDispatch();

    /// useEFFECT WILL POPULATE THE SUPPLY LIST ON PAGE LOAD
    /// FETCH_SUPPLIES DISPATCH WILL GET STOPPED BY ROOTSAGA 
    useEffect(()=>{
        console.log("Inside useEffect")
        dispatch({
            type: 'FETCH_SUPPLIES'
        })
    }, [])



    return(<>
    
    <h2>This Is Where The List Will Go 📎</h2>
    
    </>)
}

export default SuppliesList;