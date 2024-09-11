import { call, put } from 'redux-saga/effects'
import { handleGetForecast } from '../weather'
import { API_PATHS, client } from '../../../api'
import { getForecastError, getForecastSuccess } from '../..'

describe('Weather saga', () => {
  describe('Get forecast', () => {
    it('should fetch only 1 day in early hours', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-09-11 06:00'))
      const city = 'Berlin'
      const action = { city }
      const response = {
        data: {
          current: {},
          location: {},
          forecast: {}
        }
      }
      const weather = {
        current: {},
        location: {},
        hours: undefined
      }
      const generator = handleGetForecast(action)
      expect(generator.next().value).toEqual(
        call(client.get, API_PATHS.FORECAST, {
          params: {
            q: city,
            days: 1
          }
        }),
      )
      expect(generator.next(response).value).toEqual(
        put(getForecastSuccess(weather)),
      )
    })
    it('should fetch 2 days in late hours', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-09-11 22:00'))
      const city = 'Berlin'
      const action = { city }
      const generator = handleGetForecast(action)
      expect(generator.next().value).toEqual(
        call(client.get, API_PATHS.FORECAST, {
          params: {
            q: city,
            days: 2
          }
        }),
      )
    })
    it('should set error properly', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-09-11 22:00'))
      const city = 'Berlin'
      const action = { city }
      const generator = handleGetForecast(action)
      expect(generator.next().value).toEqual(
        call(client.get, API_PATHS.FORECAST, {
          params: {
            q: city,
            days: 2
          }
        }),
      )
      expect(generator.throw({ message: 'Failed' }).value).toEqual(put(getForecastError('Failed')))
    })
  })
})
