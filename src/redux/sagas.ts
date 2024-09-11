import { CallEffect, call, takeLatest } from 'redux-saga/effects'
import { GET_FORECAST_REQUEST } from './action-types'
import { client } from '../api'
import { GetForecastRequestAction } from './actions'


export function * handleGetForecast({ city }: GetForecastRequestAction): Generator<CallEffect> {
    try {
        const response = yield call(client.get, '/forecast.json', {
            params: {
              q: city
            }
          })
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}


function* mySaga() {
    yield takeLatest(GET_FORECAST_REQUEST, handleGetForecast)
}

export default mySaga
