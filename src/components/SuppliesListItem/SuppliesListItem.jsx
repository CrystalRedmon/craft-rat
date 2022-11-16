import {useHistory, Link} from 'react-router-dom';



function SuppliesListItem({ supply }) {
    const history = useHistory();
    console.log('this is supply', supply)


    /// DIRECTS USER TO SPECIFIC SUPPLY DETAILS BASED ON SUPPLIES.ID
    const handleClick = () =>{
        history.push(`/details/${supply.id}`);
    }


    return (<>


        {/* //TODO-- CONSIDER USING A TABLE INSTEAD OF UL/LI */}

        <li supply={supply}>{supply.color} {supply.name} <button onClick={handleClick}>View</button> <button>Delete</button></li>




    </>)
}

export default SuppliesListItem;