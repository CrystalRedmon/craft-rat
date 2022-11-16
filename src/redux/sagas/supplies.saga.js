import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

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
}

function* suppliesSaga(){
    yield takeLatest('FETCH_SUPPLIES', fetchSupplies);
    yield takeLatest('FETCH_CURRENT_SUPPLIES', fetchCurrentSupplies);
}

export default suppliesSaga;