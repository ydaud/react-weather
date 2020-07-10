import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import './SearchBar.css'
import cityList from '../data/city.list.json'

const formatCity = (city) => {
  if (city === null) return cityList.map(item => item.name + ' ' + item.country)

  return cityList
    .filter(item => item.name.toLowerCase().includes(city.toLowerCase()))
    .map(item => item.name + ' ' + item.country)
}

const SearchBar = () => {
  const [term, setTerm] = useState('')

  const onChange = (event) => {
    setTerm(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="center">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={onChange}
            options={formatCity(term)}
            placeholder="Choose a city..."
            selected={term}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBar
