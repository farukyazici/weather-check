import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects'
import { GET_FORECAST_REQUEST } from '../action-types'
import { API_PATHS, client } from '../../api'
import { GetForecastRequestAction, getForecastError, getForecastSuccess } from '../actions'
import dayjs from 'dayjs'
import { getNextHours } from '../../common'

const FORECAST_LIMIT = 5
export function* handleGetForecast({ city }: GetForecastRequestAction): Generator<CallEffect | PutEffect> {
  try {
    const now = dayjs()
    const isWithinTheDay = 24 - dayjs(now).hour() >= FORECAST_LIMIT
    // Get current weather forecast
    const response = yield call(client.get, API_PATHS.FORECAST, {
        params: {
          q: city,
          days: isWithinTheDay ? 1 : 2
        }
      },
    )
    const { data } = response
    const weather = {
        current: data?.current,
        location: data?.location,
        hours: getNextHours(data?.forecast?.forecastday, now, FORECAST_LIMIT)
    }
    yield put(getForecastSuccess(weather))
  } catch (err: any) {
    yield put(getForecastError(err.message))
  }
}

function* weatherSaga() {
  yield takeLatest(GET_FORECAST_REQUEST, handleGetForecast)
}

export default weatherSaga
