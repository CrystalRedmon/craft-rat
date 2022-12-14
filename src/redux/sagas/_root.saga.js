import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import suppliesSaga from './supplies.saga';
import categoriesSaga from './categories.saga';
import colorsSaga from './colors.saga';
import resourcesSaga from './resources.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    suppliesSaga(),
    categoriesSaga(),
    colorsSaga(),
    resourcesSaga(),
  ]);
}
