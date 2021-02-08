import {createStore, applyMiddleware, combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import todoReducer from './todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'; 

const middlewares = []

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todos']
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

