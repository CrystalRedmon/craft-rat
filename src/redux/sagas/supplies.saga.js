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

}


function* suppliesSaga(){
    yield takeLatest('FETCH_SUPPLIES', fetchSupplies)
}

export default suppliesSaga;