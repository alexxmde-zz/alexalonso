import React from 'react'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import App from './app'
import HomePage from './components/pages/home/homePage'
import CurriculoPage from './components/pages/curriculo/curriculoPage'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/curriculo" component={CurriculoPage} />
    </Route>
  </Router>
)
