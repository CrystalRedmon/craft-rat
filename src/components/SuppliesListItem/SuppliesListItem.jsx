import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import { useEffect } from 'react'



function SuppliesListItem({ supply }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const colors = useSelector(store => store.colors.allColors)


    const colorName = () => {

        for(let color of colors) {
            if (color.id === supply.colors_id && color.id !== 0) {

                return color.name
            }
        }
    }

    useEffect(() => {
        dispatch({
            type: 'FETCH_COLORS'
        })
    }, [])


    /// DIRECTS USER TO SPECIFIC SUPPLY DETAILS BASED ON SUPPLIES.ID
    const handleClick = () => {
        history.push(`/details/${supply.id}`);
    }

    const handleDeleteItem = () => {

        dispatch({
            type: 'DELETE_ITEM',
            payload: supply.id
        })
        alert('Item Successfully Deleted')
    }

    return (<>

        <TableCell supply={supply}>{colorName()} {supply.name}</TableCell>
        <TableCell align='right'><button onClick={handleClick}>View</button><button onClick={handleDeleteItem}>Delete</button></TableCell>

    </>)
}

export default SuppliesListItem;