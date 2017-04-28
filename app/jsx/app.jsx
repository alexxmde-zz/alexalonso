import React from 'react';
import PropTypes from 'prop-types'
import Header from './components/templates/header';
import './css/global.css'

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
