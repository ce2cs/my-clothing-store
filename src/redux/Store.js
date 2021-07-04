import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import RootReducer from "./RootReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const middlewares = [logger];

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};

