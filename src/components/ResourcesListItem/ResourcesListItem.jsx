import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';




function ResourcesListItem({ resource }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_RESOURCE',
            payload: resource.id
        });

    }

    return (<>

        <td key={resource.id}><a href={resource.website} target="_blank" >{resource.website}</a> </td>
        <td>{resource.description}</td>
        <td><button onClick={handleDelete}>Delete</button></td>
    </>)
}

export default ResourcesListItem;