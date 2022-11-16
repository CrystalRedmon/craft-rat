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

function* fetchCategories(){
    try{
        console.log('About to FetchCategories')
        const categories = yield axios.get('/api/categories');
        console.log(categories.data)
        yield put({type: 'SET_CATEGORIES', payload: categories.data})
    }catch{
        console.log('GET all categories failed');
    }
}


function* categoriesSaga() {
    yield takeLatest('FETCH_CURRENT_CATEGORY', fetchCurrentCategory);
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
}

export default categoriesSaga;