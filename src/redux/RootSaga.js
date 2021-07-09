import {all, call} from 'redux-saga/effects'
import shopSagas from "./Shop/Sagas";
import userSagas from "./User/Sagas";
import cartSagas from "./Cart/Sagas";

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}


