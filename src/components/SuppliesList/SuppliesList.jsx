import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function SuppliesList() {
    const dispatch = useDispatch();
    // gets all supplies from redux store
    const supplies = useSelector(store => store.supplies);

    console.log('This is my supplies list: ', supplies);

    /// useEFFECT WILL POPULATE THE SUPPLY LIST ON PAGE LOAD
    /// FETCH_SUPPLIES DISPATCH WILL GET STOPPED BY ROOTSAGA 
    useEffect(() => {
        console.log("Inside useEffect")
        dispatch({
            type: 'FETCH_SUPPLIES'
        })
    }, [])



    return (<>

        <h2>This Is Where The List Will Go 📎</h2>

        <ul>
            {supplies.map((supply) => {
                return (
                    <li key={supply.id}>{supply.color} {supply.name} <button>View</button> <button>Delete</button></li> 
                    
                )
            })}
        </ul>




    </>)
}

export default SuppliesList;