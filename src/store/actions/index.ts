import {
    getWeatherInfoDayPast,
    getWeatherInfo7days,
    getImageString,
} from '../../API/WeatherAPI'
import { ThunkDispatch } from 'redux-thunk'
import {
    WeatherCardType,
    Weather7DaysCardsType,
    ResponseWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfo7DaysItemType,
    ResponseWeatheInforDayPastType,
    ErrorType,
    isLoadingType,
    CoordinatesType,
    TimeType,
} from '../../types/types'

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    type: TypeKeys.SET_7DAYS_LOADING,
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
    type: TypeKeys.SET_DAY_PAST_LOADING,
    payload: isLoading,
})

export const requestWeatherInfoDayPast = (
    coordinates: CoordinatesType,
    time: TimeType
) => {
    return (dispatch: ThunkDispatch<unknown, unknown, ActionType>): void => {
        dispatch(setDayPastError(null))
        dispatch(setDayPastLoading(true))
        getWeatherInfoDayPast(coordinates, time)
            .then((res: ResponseWeatheInforDayPastType): void => {
                const { current, hourly } = res
                const temps = hourly?.map((hour) => hour.temp) || []
                const maxTemp = Math.max(...temps)
                const index =
                    hourly?.findIndex(
                        (hour): boolean => hour.temp === maxTemp
                    ) || 0
                const image = getImageString(
                    hourly?.[index]?.weather?.[0]?.icon ?? null
                )
                const temperature = hourly?.[index]?.temp ?? null
                const date = current?.dt ?? null
                dispatch(setDayPastWeatherInfo({ date, temperature, image }))
            })
            .catch((error: ResponseWeatherInfo7DaysType): void => {
                const { message } = error

                dispatch(setDayPastError(message ?? 'The request failed'))
            })
            .finally(() => {
                dispatch(setDayPastLoading(false))
            })
    }
}

export const requestWeather7DaysInfo = (coordinates: CoordinatesType) => {
    return (dispatch: ThunkDispatch<unknown, unknown, ActionType>): void => {
        dispatch(set7DaysError(null))
        dispatch(set7DaysLoading(true))
        getWeatherInfo7days(coordinates)
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
                    if (sevenDaysInfo.length === 0) {
                        dispatch(set7DaysWeatherInfo([]))
                    } else {
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
                                        return { date, temperature, image }
                                    }
                                )
                            )
                        )
                    }
                }
            )
            .catch((error: ResponseWeatherInfo7DaysType): void => {
                const { message } = error
                dispatch(set7DaysError(message ?? 'The request failed'))
            })
            .finally(() => {
                dispatch(set7DaysLoading(false))
            })
    }
}
