import { takeLatest } from 'redux-saga/effects'
import { GET_CURRENT_WEATHER } from './action-types'


export function * handleGetWeatherForCity() {
    try {
        // Get weather for a city
        yield
    } catch (e) {
    }
}


function* mySaga() {
    yield takeLatest(GET_CURRENT_WEATHER, handleGetWeatherForCity)
}

export default mySaga
