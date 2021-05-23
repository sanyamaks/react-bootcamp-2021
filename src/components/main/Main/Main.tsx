import React, { useEffect, useState } from 'react'
import './Main.css'
import WeatherSection from '../WeatherSection/WeatherSection'
import { CoordinatesType, TimeType } from '../../../types/types'
import {
    connectCustomMain,
    ConnectPropsType,
} from '../../../containers/main/Main'

const Main = (props: ConnectPropsType): JSX.Element => {
    const {
        sevenDays,
        errorMessageSevenDays,
        isLoadingSevenDays,
        dayPast,
        errorMessageDayPast,
        isLoadingDayPast,
        requestWeather7DaysInfo,
        requestWeatherInfoDayPast,
    } = props

    const [formDayPast, setFormDayPast] = useState({
        coordinates: null as CoordinatesType | null,
        time: null as TimeType | null,
    })

    useEffect(() => {
        if (formDayPast.coordinates && formDayPast.time) {
            requestWeatherInfoDayPast(formDayPast.coordinates, formDayPast.time)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formDayPast])

    const getWeather7DaysInfo = (coordinates: CoordinatesType): void => {
        requestWeather7DaysInfo(coordinates)
    }

    const setDateDayPast = (time: TimeType): void => {
        setFormDayPast({ ...formDayPast, time: time })
    }

    const setCoordinatesDayPast = (coordinates: CoordinatesType): void => {
        setFormDayPast({
            ...formDayPast,
            coordinates: { lat: coordinates.lat, lon: coordinates.lon },
        })
    }

    return (
        <main className="main">
            <WeatherSection
                title="7 Days Forecast"
                sendCoordinates={getWeather7DaysInfo}
                numberCards={7}
                cards={sevenDays}
                errorMessage={errorMessageSevenDays}
                isLoad={isLoadingSevenDays}
            />
            <WeatherSection
                className="main__weather-section"
                title="Forecast for a Date in the Past"
                sendCoordinates={setCoordinatesDayPast}
                sendDate={setDateDayPast}
                numberCards={1}
                cards={dayPast}
                errorMessage={errorMessageDayPast}
                isLoad={isLoadingDayPast}
            />
        </main>
    )
}

export default connectCustomMain(React.memo(Main))
