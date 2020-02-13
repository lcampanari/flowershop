import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './pages/Store'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Store} />
      </Switch>
    </BrowserRouter>
  )
}
