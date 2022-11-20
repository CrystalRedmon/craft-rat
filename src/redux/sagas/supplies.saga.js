import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ContactPageSharp } from '@mui/icons-material';


/// THIS SAGA WILL COMPLETE THE GET AXIOS FOR THE LIST VIEW
function* fetchSupplies(){
    try{
        const supplies = yield axios.get('/api/supplies');
        console.log('These are all of the supplies', supplies.data)
        yield put({type: 'SET_SUPPLIES', payload: supplies.data})
    }catch{
        console.log('get supplies failed');
    }
};

/// THIS SAGA WILL GET THE DETAILS FOR THE CURRENT ITEM
function* fetchCurrentSupplies(action){
    try{
        console.log('fetchCurrentSupplies ', action.payload)
        const currentSupplies = yield axios.get(`/api/supplies/${action.payload}`);
        console.log('This is the current item: ', currentSupplies.data);
        yield put({type: 'SET_CURRENT_SUPPLIES', payload: currentSupplies.data[0]}) 
    }catch{
        console.log('fetchCurrentSupplies failed')
    }
};


function* addNewItem(action){
    try{
        console.log(action.payload);
        yield axios.post('/api/supplies', {data: action.payload});
        yield put({type: 'SET_NEW_ITEM', payload: action.payload })
    }catch{

    }
};

function* deleteItem(action){
    console.log('inside deleteItem Saga', action.payload);

    try{
        
        yield axios.delete(`/api/supplies/${action.payload}`);
        // unsure if there should be a put to reducer since not adding anything. 
        yield put({type: 'FETCH_SUPPLIES'})
    }catch{
        console.log('Inside delteItem Saga, delete failed');
    }
}

function* saveItem(action){
    console.log('inside updateItem Saga', action);
    try{ 
        yield axios.put(`/api/supplies/${action.payload.id}`, {data: action.payload})
        yield put({type: 'FETCH_SUPPLIES'})
    }catch{
        console.log('updateItem failed')
    }
}

// GETS FILTERED LIST BASED ON USER INPUT TO CATEGORY, COLOR, AND/OR SCRAPS.
function* fetchFilteredList(action){
    try{
        console.log('⭐', action.payload);
        const filteredList = yield axios.get(`/api/filtered/`, {params: action.payload} );
        console.log('filteredList results: ', filteredList.data);
        yield put({type: 'SET_SUPPLIES', payload: filteredList.data});
    }catch(error){
        console.log('GET filteredList failed: ', error);
    }
}


function* suppliesSaga(){
    yield takeLatest('FETCH_SUPPLIES', fetchSupplies);
    yield takeLatest('FETCH_CURRENT_SUPPLIES', fetchCurrentSupplies);
    yield takeLatest('ADD_NEW_ITEM', addNewItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('SAVE_ITEM', saveItem); /// SENDS EDIT UPDATES TO DB
    yield takeLatest('FETCH_FILTERED_LIST', fetchFilteredList);
}

export default suppliesSaga;