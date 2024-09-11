import { GET_FORECAST_ERROR, GET_FORECAST_SUCCESS } from '../../action-types'
import weatherReducer, { initialState } from '../weather'

describe('Weather reducer', () => {
  it('should return default state', () => {
    expect(weatherReducer(initialState, )).toEqual(initialState)
  })
  it('should set forecast properly', () => {
    const weather = {
            current: {
                condition: {
                    temp_c: '28.7',
                    temp_f: '83.6'
                }
            },
            hours: [],
            location: {}
    }
    const action = {
      type: GET_FORECAST_SUCCESS,
      weather
    }
    const expectedState = {
      weather,
      error: null
    }
    expect(weatherReducer(initialState, action)).toEqual(expectedState)
  })
  it('should set error properly', () => {
    const error = 'Failed'
    const action = {
      type: GET_FORECAST_ERROR,
      error
    }
    const expectedState = {
      weather: null,
      error
    }
    expect(weatherReducer(initialState, action)).toEqual(expectedState)
  })

})
