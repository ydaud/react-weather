import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { dailyWeather } from '../reducers/weatherReducer'
import cityList from '../data/city.list.json'
import './SearchBar.css'

const formatCity = (city) => {
  if (city === '') return cityList

  return cityList
    .filter(item => item.name.toLowerCase().includes(city.toLowerCase()))
}

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [term, setTerm] = useState('')
  const [placeholder, setPlaceHolder] = useState('')
  const [list, setList] = useState(cityList)

  const onChange = (event) => {
    setTerm(event.target.value)
    setList(formatCity(term))

    if (term.length === 0) setPlaceHolder('No city found')
    else if (list.length === 0) setPlaceHolder('Enter a city...')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(list[0])

    dispatch(dailyWeather(list[0].id))
  }

  return (
    <div className="center">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            onChange={onChange}
            value={term}
            type="text"
            placeholder={placeholder}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBar
