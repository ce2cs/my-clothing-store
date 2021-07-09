import {takeLatest, put, all, call} from 'redux-saga/effects'
import {actionTypes} from "./ActionTypes";
import {auth, createUserDocument} from "../../components/Firebase/utils";
import {googleProvider, getCurrentUser} from "../../components/Firebase/utils";
import {
  signInFailure,
  signInSuccess, signOutFailure, signOutStart, signOutSuccess,
} from "./Actions";

function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield call(getUserFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* getUserFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GoogleSignInStart, signInWithGoogle);
}

function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getUserFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(actionTypes.emailSignInStart, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(actionTypes.checkUserSession, checkIfAuthenticated);
}

function* checkIfAuthenticated() {
  try {
    const userAuth = getCurrentUser();
    if (!userAuth) return;
    yield call(getUserFromUserAuth, userAuth);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* onSignOut() {
  yield takeLatest(actionTypes.signOutStart, signOut);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut)
  ])
}