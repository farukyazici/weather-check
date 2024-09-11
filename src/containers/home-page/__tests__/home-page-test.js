import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { act, fireEvent, render } from '@testing-library/react-native'

import { HomePage } from '..'
import weatherReducer from '../../../redux/reducers/weather'
import { getForecastRequest } from '../../../redux'

const store = createStore(
  combineReducers({
    weatherState: weatherReducer
  }),
  {
    weatherState: {
      weather: {
        location: {
          name: 'Berlin'
        },
        hours: [
          {
            temp_c: 29
          },
          {
            temp_c: 32
          }
        ]
      }
    }
  },
)
const spyDispatch = jest.spyOn(store, 'dispatch')

describe('Home page', () => {
  it('renders without error', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
  })
  it('should set search text on button click', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
    const searchBtn = getByTestId('search-button')
    await act(async () => {
      fireEvent(searchBtn, 'press')
    })
    expect(spyDispatch).toHaveBeenCalledWith(
      getForecastRequest(''),
    )
  })
})
