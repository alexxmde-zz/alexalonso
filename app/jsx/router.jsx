import React from 'react'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import App from './app'
import HomePage from './components/pages/home/homePage'
import CurriculoPage from './components/pages/curriculo/curriculoPage'
import PortfolioPage from './components/pages/portfolio/portfolioPage'
import ContatoPage from './components/pages/contato/contatoPage'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/curriculo" component={CurriculoPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contato" component={ContatoPage} />
    </Route>
  </Router>
)
