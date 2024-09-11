import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects'
import { GET_FORECAST_REQUEST } from './action-types'
import { API_PATHS, client } from '../api'
import { GetForecastRequestAction, getForecastSuccess } from './actions'
import { Weather } from './reducers'
import { AxiosResponse } from 'axios'


export function * handleGetForecast({ city }: GetForecastRequestAction): Generator<CallEffect | PutEffect> {
    try {
        // Gett current weather forecast
        const response: AxiosResponse<Weather> = yield call(client.get, API_PATHS.FORECAST, {
            params: {
              q: city
            }
          })
        const data = response?.data
        yield put(getForecastSuccess(data))
    } catch (err) {
        console.log(err)
    }
}


function* mySaga() {
    yield takeLatest(GET_FORECAST_REQUEST, handleGetForecast)
}

export default mySaga
