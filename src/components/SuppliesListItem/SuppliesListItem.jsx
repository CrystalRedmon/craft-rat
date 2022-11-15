

function SuppliesListItem({ supply }) {

    console.log('this is supply', supply)

    return (<>


        {/* //TODO-- CONSIDER USING A TABLE INSTEAD OF UL/LI */}

        <li>{supply.color} {supply.name} <button>View</button> <button>Delete</button></li>




    </>)
}

export default SuppliesListItem;