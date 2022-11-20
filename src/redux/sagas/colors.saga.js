import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCurrentColor(action) {
    try {
        const currentColor = yield axios.get(`/api/colors/${action.payload}`);
        console.log('getting current color: ', currentColor.data);
        yield put({ type: 'SET_CURRENT_COLOR', payload: currentColor.data });
    } catch (error) {
        console.log('fetchCurrentColor failed: ', error);
    }
}

function* fetchColors() {
    try {
        const colors = yield axios.get('/api/colors');
        console.log('All of the colors: ', colors.data);
        yield put({ type: 'SET_COLORS', payload: colors.data });
    } catch (error) {
        console.log('fetchColors failed: ', error);
    }
}

function* colorsSaga() {
    yield takeLatest('FETCH_COLORS', fetchColors);
    yield takeLatest('FETCH_CURRENT_COLOR', fetchCurrentColor);
}

export default colorsSaga;