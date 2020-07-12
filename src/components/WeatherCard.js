import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dailyWeather } from '../reducers/weatherReducer'

const WeatherCard = ({ id }) => {
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)

  console.log(weather)
  console.log

  useEffect(() => {
    dispatch(dailyWeather(id))
  }, [dispatch, id])

  return (
    <div>
      Hello
    </div>
  )
}

export default WeatherCard
