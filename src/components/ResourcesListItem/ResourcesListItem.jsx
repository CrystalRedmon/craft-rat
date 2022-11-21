

function ResourcesListItem({resources}) {


    return (<>

        <td resource={resource}>{resource.website} {resource.description}</td>
        <td><button onClick={handleClick}>View</button></td>
        <td><button onClick={handleDeleteItem}>Delete</button></td>
    </>)
}

export default ResourcesListItem;