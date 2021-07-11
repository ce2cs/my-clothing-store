import {takeLatest, call, put, all} from 'redux-saga/effects'

import ActionTypes from "./ActionTypes";
import {store} from "../../components/Firebase/utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./Actions";
import {convertCollectionsToMaps} from "../../components/Firebase/utils";

function* fetchCollectionsStart() {
  yield takeLatest(ActionTypes.fetchCollectionStart, fetchCollectionsAsync);
}

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = store.collection('collections')
    const snapshot = yield collectionsRef.get();
    const collectionMap = yield call(convertCollectionsToMaps, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export default function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}