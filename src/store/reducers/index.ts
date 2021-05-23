import {
    CitiesType,
    Weather7DaysCardsType,
    WeatherCardType,
    ErrorType,
    isLoadingType,
} from '../../types/types'
import { ActionType, TypeKeys } from '../actions'

export type InitialStateType = {
    idActiveCity: number | null
    cities: CitiesType
    sevenDays: {
        days: Weather7DaysCardsType
        errorMessage: ErrorType
        isLoading: isLoadingType
    }
    dayPast: {
        day: WeatherCardType[]
        errorMessage: ErrorType
        isLoading: isLoadingType
    }
}

const initialState: InitialStateType = {
    idActiveCity: null,
    cities: [
        {
            id: 1,
            name: 'Samara',
            coordinates: { lat: '53.195873', lon: '50.100193' },
        },
        {
            id: 2,
            name: 'Togliatti',
            coordinates: { lat: '53.507836', lon: '49.420393' },
        },
        {
            id: 3,
            name: 'Saratov',
            coordinates: { lat: '51.533557', lon: '46.034257' },
        },
        {
            id: 4,
            name: 'Kazan',
            coordinates: { lat: '55.796127', lon: '49.106405' },
        },
        {
            id: 5,
            name: 'Krasnodar',
            coordinates: { lat: '45.035470', lon: '38.975313' },
        },
    ],
    sevenDays: {
        days: [],
        errorMessage: null,
        isLoading: false,
    },
    dayPast: {
        day: [],
        errorMessage: null,
        isLoading: false,
    },
}

export const Reducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case TypeKeys.SET_7DAYS_LOADING:
            return {
                ...state,
                sevenDays: { ...state.sevenDays, isLoading: action.payload },
            }
        case TypeKeys.SET_7DAYS_ERROR:
            return {
                ...state,
                sevenDays: { ...state.sevenDays, errorMessage: action.payload },
            }
        case TypeKeys.SET_7DAYS_WEATHER_INFO:
            return {
                ...state,
                sevenDays: { ...state.sevenDays, days: [...action.payload] },
            }
        case TypeKeys.SET_DAY_PAST_LOADING:
            return {
                ...state,
                dayPast: { ...state.dayPast, isLoading: action.payload },
            }
        case TypeKeys.SET_DAY_PAST_ERROR:
            return {
                ...state,
                dayPast: { ...state.dayPast, errorMessage: action.payload },
            }
        case TypeKeys.SET_DAY_PAST_WEATHER_INFO:
            return {
                ...state,
                dayPast: { ...state.dayPast, day: [action.payload] },
            }
        default:
            return state
    }
}
