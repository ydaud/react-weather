import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { dailyWeather } from '../reducers/weatherReducer'

const LocationCard = ({ city, country }) => {
  const divStyle = {
    'width': '90%',
    'margin': '20px auto 0px',
    'boxShadow': '2px 5px',
  }

  return (
    <div style={divStyle}>
      <h3>{city}, {country}</h3>
    </div>
  )
}

const CurrentWeather = ({ currTemp, description, logo, min, max }) => {
  const divStyle = {
    'width': '90%',
    'margin': '20px auto 0px',
    'boxShadow': '2px 5px',
  }

  const iconUrl = 'http://openweathermap.org/img/w/' + logo + '.png'
  currTemp = Math.round(currTemp - 273.15)
  min = Math.round(min - 273.15)
  max = Math.round(max - 273.15)

  return (
    <div style={divStyle}>
      <Col>
        <Row>
          <Col>
            <img className='icon' src={iconUrl} />
          </Col>
          <Col>
            <Row>
              <Col>{min}</Col>
              <Col>{max}</Col>
            </Row>
            <Row>
              {currTemp}
            </Row>
          </Col>
        </Row>
        <Row>
          {description}
        </Row>
      </Col>
    </div>
  )
}

const WeatherCard = ({ id }) => {
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)

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
      <Row>
        <LocationCard
          city={weather.name}
          country={weather.sys.country}
        />
      </Row>

      <Row>
        <CurrentWeather
          currTemp={weather.main.temp}
          description={weather.weather[0].description}
          min={weather.main.temp_min}
          max={weather.main.temp_max}
          logo={weather.weather[0].icon}
        />
      </Row>

    </div>
  )
}

export default WeatherCard
