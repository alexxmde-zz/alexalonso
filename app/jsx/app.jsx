import React from 'react';
import PropTypes from 'prop-types'
import Header from './components/templates/header'
import Footer from './components/templates/footer'
import './css/global.css'

const App = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
