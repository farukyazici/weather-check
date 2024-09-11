import { GET_FORECAST_ERROR, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../action-types'

export interface GetForecastRequestAction {
    type: typeof GET_FORECAST_REQUEST;
    city: string;
}

export interface GetForecastSuccessAction {
    type: typeof GET_FORECAST_SUCCESS;
    current: any;
    forecast: any;
}

export interface GetForecastErrorAction {
    type: typeof GET_FORECAST_ERROR;
    error: any;
}
