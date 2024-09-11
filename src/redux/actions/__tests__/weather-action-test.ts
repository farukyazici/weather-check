import { GET_FORECAST_ERROR, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../../action-types'
import { getForecastError, getForecastRequest, getForecastSuccess } from '../weather'

describe('Weather actions', () => {
  it('Get forecast request should return expected action', () => {
    const city = 'Berlin'
    const expected = {
        type: GET_FORECAST_REQUEST,
        city
    }
    expect(getForecastRequest(city)).toEqual(expected)
  })
  it('Get forecast success should return expected action', () => {
    const weather = {}
    const expected = {
        type: GET_FORECAST_SUCCESS,
        weather
    }
    expect(getForecastSuccess(weather)).toEqual(expected)
  })
  it('Get forecast error should return expected action', () => {
    const error = 'Failed'
    const expected = {
        type: GET_FORECAST_ERROR,
        error
    }
    expect(getForecastError(error)).toEqual(expected)
  })
})
