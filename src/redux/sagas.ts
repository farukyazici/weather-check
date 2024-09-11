import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects'
import { GET_FORECAST_REQUEST } from './action-types'
import { API_PATHS, client } from '../api'
import { GetForecastRequestAction, getForecastSuccess } from './actions'
import { ForecastDay, Hour } from './reducers'
import dayjs, { Dayjs } from 'dayjs'

const FORECAST_LIMIT = 8
export function* handleGetForecast({
  city
}: GetForecastRequestAction): Generator<CallEffect | PutEffect> {
  try {
    const now = dayjs()
    const isWithinTheDay = 24 - dayjs(now).hour() >= FORECAST_LIMIT
    // Gett current weather forecast
    const response = yield call(
      client.get,
      API_PATHS.FORECAST,
      {
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
        hours: getNext5Forecast(data?.forecast?.forecastday, now)
    }
    yield put(getForecastSuccess(weather))
  } catch (err) {
    console.log(err)
  }
}

function* mySaga() {
  yield takeLatest(GET_FORECAST_REQUEST, handleGetForecast)
}

const getNext5Forecast = (forecastday: ForecastDay[], localtime: Dayjs) => {
  const forecastHourList = forecastday?.map((f: ForecastDay) => f.hour)
  const currentTimestamp = dayjs(localtime).add(1, 'hour').format('YYYY-MM-DD HH:00')
  const mergedHours: Hour[] = forecastHourList?.flat()?.map(hour => ({
      time: hour.time,
      condition: hour.condition,
      temp_c: hour.temp_c,
      temp_f: hour.temp_f
    })
  )
  const nextHourIndex = mergedHours.findIndex(hour => hour.time === currentTimestamp)
  const nextHours = mergedHours.slice(nextHourIndex, nextHourIndex + FORECAST_LIMIT)
  return nextHours
}

export default mySaga
