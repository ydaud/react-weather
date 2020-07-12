import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dailyWeather } from '../reducers/weatherReducer'

const LocationCard = ({ city, country }) => {
  return (
    <div>
      <h3>{city}, {country}</h3>
    </div>
  )
}

const WeatherCard = ({ id }) => {
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)

  console.log('Weather', weather)

  useEffect(() => {
    dispatch(dailyWeather(id))
  }, [dispatch, id])

  if (weather === null) {
    return (
      <div>
        No such city
      </div>
    )
  }

  return (
    <div>
      <LocationCard city={weather.name} country={weather.sys.country} />
    </div>
  )
}

export default WeatherCard
