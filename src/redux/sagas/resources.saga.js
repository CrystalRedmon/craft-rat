import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';


function* fetchResources(){
    try{
        const resources = yield axios.get('/api/resources');
        console.log('Got all of the resources: ', resources.data);
        yield put({type: 'SET_RESOURCES', payload: resources.data})
    }catch(error){
        console.log('GET resources failed:', error);
    }
};

function* deleteResource(action){
    try{
        yield axios.delete(`/api/resources/${action.payload}`);
        yield put({type: 'FETCH_RESOURCES'});
    }catch(error){
        console.log('DELETE this resource: ', error)
    }
}



//TODO--- ADD RESOURCES SAGA







function* resourcesSaga(){
    yield takeLatest('FETCH_RESOURCES', fetchResources);
    yield takeLatest('DELETE_RESOURCE', deleteResource);
}

export default resourcesSaga;