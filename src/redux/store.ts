import { combineReducers, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/weather'
import weatherReducer from './reducers/weather'

// Combining multiple reducers here and provide a key to idenitfy them
const rootReducer = combineReducers({
    weatherState: weatherReducer
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Creating and exporting the store
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

// then run the saga
sagaMiddleware.run(mySaga)
