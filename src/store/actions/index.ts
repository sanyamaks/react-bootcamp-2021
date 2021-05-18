import {
    geWeatherInfotDayPast,
    getWeatherInfo7days,
    getImageString,
} from '../../API/WeatherAPI'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
    WeatherCardType,
    Weather7DaysCardsType,
    ResponseWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfo7DaysItemType,
    ResponseSuccessfulWeatherInfoDayPastType,
    ResponseWeatheInforDayPastType,
    ErrorType,
    isLoadingType,
} from '../../types/types'
import { Dispatch } from 'react'

export enum TypeKeys {
    SET_7DAYS_WEATHER_INFO = 'SET_7DAYS_WEATHER_INFO',
    SET_7DAYS_ERROR = 'SET_7DAYS_ERROR',
    SET_7DAYS_LOADING = 'SET_7DAYS_LOADING',
    SET_DAY_PAST_WEATHER_INFO = 'SET_DAY_PAST_WEATHER_INFO',
    SET_DAY_PAST_ERROR = 'SET_DAY_PAST_ERROR',
    SET_DAY_PAST_LOADING = 'SET_DAY_PAST_LOADING',
}

export type ActionType = {
    type: string
    payload: any
}

export const set7DaysWeatherInfo = (
    cardsInfo: Weather7DaysCardsType
): ActionType => ({
    type: TypeKeys.SET_7DAYS_WEATHER_INFO,
    payload: cardsInfo,
})

export const set7DaysError = (errorMessage: ErrorType): ActionType => ({
    type: TypeKeys.SET_7DAYS_ERROR,
    payload: errorMessage,
})

export const set7DaysLoading = (isLoading: isLoadingType): ActionType => ({
    type: TypeKeys.SET_7DAYS_ERROR,
    payload: isLoading,
})

export const setDayPastWeatherInfo = (
    cardInfo: WeatherCardType
): ActionType => ({
    type: TypeKeys.SET_DAY_PAST_WEATHER_INFO,
    payload: cardInfo,
})

export const setDayPastError = (errorMessage: ErrorType): ActionType => ({
    type: TypeKeys.SET_DAY_PAST_ERROR,
    payload: errorMessage,
})

export const setDayPastLoading = (isLoading: isLoadingType): ActionType => ({
    type: TypeKeys.SET_DAY_PAST_ERROR,
    payload: isLoading,
})

export const requestWeatherInfoDayPast = () => {
    return (dispatch: ThunkDispatch<unknown, unknown, ActionType>): void => {
        dispatch(setDayPastError(null))
        dispatch(setDayPastLoading(true))
        geWeatherInfotDayPast(
            {
                lat: '53.195873',
                lon: '50.100193',
            }, // Comment: Change hardcoded data
            1620932656 // Comment: Change hardcoded data
        )
            .then(
                (
                    res: ResponseWeatheInforDayPastType
                ): ResponseSuccessfulWeatherInfoDayPastType => {
                    const { current } = res
                    console.log()
                    return current ?? null
                }
            )
            .then((day: ResponseSuccessfulWeatherInfoDayPastType): void => {
                const image = getImageString(day?.weather?.[0]?.icon ?? null)
                const temperature = day?.temp ?? null
                const date = day?.dt ?? null
                dispatch(setDayPastWeatherInfo({ date, temperature, image }))
            })
            .catch((error: ResponseWeatherInfo7DaysType): void => {
                const { message } = error

                dispatch(setDayPastError(message ?? 'The request failed'))
            })
            .finally(() => {
                dispatch(setDayPastLoading(true))
            })
    }
}

export const requestWeather7DaysInfo = () => {
    return (dispatch: ThunkDispatch<unknown, unknown, ActionType>): void => {
        dispatch(set7DaysError(null))
        dispatch(set7DaysLoading(true))
        getWeatherInfo7days({
            lat: '53.195873',
            lon: '50.100193',
        }) // Comment: Change hardcoded data
            .then(
                (
                    sevenDaysInfo: ResponseWeatherInfo7DaysType
                ): ResponseSuccessfulWeatherInfo7DaysType => {
                    const { daily } = sevenDaysInfo
                    return daily ?? []
                }
            )
            .then(
                (
                    sevenDaysInfo: ResponseSuccessfulWeatherInfo7DaysType
                ): void => {
                    dispatch(
                        set7DaysWeatherInfo(
                            sevenDaysInfo.map(
                                (
                                    // eslint-disable-next-line max-len
                                    dayInfo: ResponseSuccessfulWeatherInfo7DaysItemType
                                ): WeatherCardType => {
                                    const image = getImageString(
                                        dayInfo?.weather?.[0]?.icon ?? null
                                    )
                                    const temperature =
                                        dayInfo?.temp?.day ?? null
                                    const date = dayInfo?.dt ?? null
                                    console.log({ date, temperature, image })
                                    return { date, temperature, image }
                                }
                            )
                        )
                    )
                }
            )
            .catch((error: ResponseWeatherInfo7DaysType): void => {
                const { message } = error
                dispatch(set7DaysError(message ?? 'The request failed'))
            })
            .finally(() => {
                dispatch(set7DaysLoading(true))
            })
    }
}
