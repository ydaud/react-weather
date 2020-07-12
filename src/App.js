import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const match = useRouteMatch('/cities/:id')
  const id = match ? match.params.id : null

  return (
    <div>
      <Switch>

        <Route path='/cities/:id'>
          <WeatherCard id={id} />
        </Route>
        <Route path='/'>
          <SearchBar />
        </Route>
      </Switch>
    </div>
  )
}

export default App
