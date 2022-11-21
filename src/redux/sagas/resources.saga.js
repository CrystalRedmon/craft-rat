import { takeLatest } from "redux-saga/effects";
import {axios} from 'axios';


function* fetchResources(){
    try{
        const resources = yield get('/resources');
        console.log('Got all of the resources: ', resources.data);
        yield put({type: 'SET_RESOURCES', payload: resources.data})
    }catch(error){
        console.log('GET resources failed:', error);
    }
};

//TODO--- ADD RESOURCES SAGA







function* resourcesSaga(){
    yield takeLatest('FETCH_RESOURCES', fetchResources);
}

export default resourcesSaga;