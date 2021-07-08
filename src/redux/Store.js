import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};

