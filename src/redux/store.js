import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore} from 'redux-persist'

import reducer from './root-reducer'

const middlewares = [];

if (process.env.NODE_ENV==='development') {
    middlewares.push(logger)
}

export const store = createStore(reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default {store, persistor};