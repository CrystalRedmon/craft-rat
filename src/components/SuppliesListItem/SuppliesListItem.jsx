import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function SuppliesListItem({ supply }) {
    const history = useHistory();
    const dispatch = useDispatch();

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


        {/* //TODO-- CONSIDER USING A TABLE INSTEAD OF UL/LI */}

        <td supply={supply}>{supply.color} {supply.name}</td>
        <td><button onClick={handleClick}>View</button></td>
        <td><button onClick={handleDeleteItem}>Delete</button></td>



        {/* <li >{supply.color} {supply.name} <button onClick={handleClick}>View</button> 
        <button onClick={handleDeleteItem}>Delete</button></li> */}




    </>)
}

export default SuppliesListItem;