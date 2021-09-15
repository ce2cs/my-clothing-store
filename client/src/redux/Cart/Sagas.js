import {all, takeLatest, put, call} from 'redux-saga/effects'
import {actionTypes} from "../User/ActionTypes";
import {clearCart} from "./Actions";

function* clearCartItems() {
  yield put(clearCart())
}

function* onSignOutSuccess() {
  yield takeLatest(actionTypes.signOutSuccess, clearCartItems)
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}