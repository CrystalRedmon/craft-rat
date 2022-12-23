import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




function AddResourceForm() {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories.allCategories);
    const [newResource, setNewResource] = useState({
        category: '',
        website: '',
        description: '',
    })

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, []);




    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({
            type: 'ADD_RESOURCE',
            payload: newResource
        })

       /// TODO--- EMPTY INPUT FIELDS ON SUBMIT
    }

    return (<>

        <h1>Add Resource Form</h1>
        <form onSubmit={handleSubmit}>
            <select
                required
                onChange={(evt) => { setNewResource({ ...newResource, category: evt.target.value }) }}
                value={newResource.category}>
                <option
                    name="dropFrom"
                    value=""
                    disable>Select a Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <textarea
                required
                placeholder={'Enter website URL'}
                onChange={(evt) => { setNewResource({ ...newResource, website: evt.target.value }) }}>
            </textarea>

            <textarea
                required
                placeholder={'Enter description'}
                onChange={(evt) => { setNewResource({ ...newResource, description: evt.target.value }) }}>
            </textarea>
            <button>Submit</button>
        </form>
    </>)
};

export default AddResourceForm;