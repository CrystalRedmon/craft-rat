import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCurrentCategory(action) {
    try {

        const currentCategory = yield axios.get(`/api/categories/${action.payload}`);
        console.log('getting current category: ', currentCategory.data);
        yield put({ type: 'SET_CURRENT_CATEGORY', payload: currentCategory.data });
    } catch {
        console.log('get current category failed');
    }
}



function* categoriesSaga() {
    yield takeLatest('FETCH_CURRENT_CATEGORY', fetchCurrentCategory);
}

export default categoriesSaga;