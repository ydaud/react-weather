import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <SearchBar></SearchBar>
        </Route>
      </Switch>
    </div>
  )
}

export default App
