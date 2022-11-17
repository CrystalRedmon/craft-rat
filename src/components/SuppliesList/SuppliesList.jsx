import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuppliesListItem from '../SuppliesListItem/SuppliesListItem';



function SuppliesList() {
    const dispatch = useDispatch();
    // gets all supplies from redux store
    // consider renaming. supplies vs items. is another reducer needed?
    const supplies = useSelector(store => store.supplies.supplies);

    console.log('This is my supplies list: ', supplies.supplies);

    /// useEFFECT WILL POPULATE THE SUPPLY LIST ON PAGE LOAD
    /// FETCH_SUPPLIES DISPATCH WILL GET STOPPED BY ROOTSAGA 
    useEffect(() => {
        console.log("Inside useEffect")
        dispatch({
            type: 'FETCH_SUPPLIES'
        })
    }, [])


    return (<>
        <table>
            <thead>
                <tr>
                    <td>Item Description</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>

                {supplies.map((supply, i) => {
                    return <tr><SuppliesListItem key={i} supply={supply} /></tr>
                })}

            </tbody>

        </table>



    </>)
}

export default SuppliesList;