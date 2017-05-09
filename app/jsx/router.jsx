import React from 'react'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import AppPt from './appPt'
import AppEn from './appEn'
import HomePagePt from './components/languages/pt/homePage'
import HomePageEn from './components/languages/en/homePage'
import CurriculoPagePt from './components/languages/pt/curriculoPage'
import CurriculoPageEn from './components/languages/en/curriculoPage'
import PortfolioPage from './components/languages/pt/portfolioPage'
import PortfolioPageEn from './components/languages/en/portfolioPage'
import ContactPageEn from './components/languages/en/contactPage'
import ContatoPagePt from './components/languages/pt/contatoPage'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={AppPt}>
      <IndexRoute component={HomePagePt} />
      <Route path="/pt/curriculo" component={CurriculoPagePt} />
      <Route path="/pt/portfolio" component={PortfolioPage} />
      <Route path="/pt/contato" component={ContatoPagePt} />
    </Route>
    <Route path="/en" component={AppEn}>
      <IndexRoute component={HomePageEn} />
      <Route path="/en/curriculum" component={CurriculoPageEn} />
      <Route path="/en/portfolio" component={PortfolioPageEn} />
      <Route path="/en/contact" component={ContactPageEn} />
    </Route>
  </Router>
)
