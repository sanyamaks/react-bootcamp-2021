import { connect, ConnectedProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { InitialStateType } from '../../store/reducers'
import {
    requestWeather7DaysInfo,
    requestWeatherInfoDayPast,
    ActionType,
} from '../../store/actions'
import {
    CoordinatesType,
    TimeType,
    Weather7DaysCardsType,
    WeatherCardType,
    ErrorType,
    isLoadingType,
} from '../../types/types'

type DispatchProps = {
    requestWeather7DaysInfo: (coordinates: CoordinatesType) => void
    requestWeatherInfoDayPast: (
        coordinates: CoordinatesType,
        time: TimeType
    ) => void
}

const mapStateToProps = (
    state: InitialStateType
): {
    sevenDays: Weather7DaysCardsType
    errorMessageSevenDays: ErrorType
    isLoadingSevenDays: isLoadingType
    dayPast: WeatherCardType[]
    errorMessageDayPast: ErrorType
    isLoadingDayPast: isLoadingType
} => {
    return {
        sevenDays: state.sevenDays.days,
        errorMessageSevenDays: state.sevenDays.errorMessage,
        isLoadingSevenDays: state.sevenDays.isLoading,
        dayPast: state.dayPast.day,
        errorMessageDayPast: state.dayPast.errorMessage,
        isLoadingDayPast: state.dayPast.isLoading,
    }
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<unknown, unknown, ActionType>
): DispatchProps => {
    return {
        requestWeather7DaysInfo: (coordinates) => {
            dispatch(requestWeather7DaysInfo(coordinates))
        },
        requestWeatherInfoDayPast: (coordinates, time) => {
            dispatch(requestWeatherInfoDayPast(coordinates, time))
        },
    }
}

export type ConnectPropsType = ConnectedProps<typeof connectCustomMain>
export const connectCustomMain = connect(mapStateToProps, mapDispatchToProps)
