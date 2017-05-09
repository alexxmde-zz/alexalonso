import React from 'react';
import PropTypes from 'prop-types'
import Header from './components/templates/header'
import Footer from './components/templates/footer'
import './css/global.css'

class AppEn extends React.Component {
  render() {
  const headerContent = {
  curriculumLink: '/#/en/curriculum',
    curriculum: 'Curriculum',
    portfolio: 'Portfolio',
    portfolioLink: '/#/en/portfolio',
    contact: 'Contact',
    contactLink: '/#/en/contact',
    home: 'Home',
    homeLink: '/#/en',
    socialNetworks: 'Social Networks',
    language: 'Language',
    linkPt: '/#/',
    linkEn: '/#/en'
}
  return(
    <div>
      <Header content={headerContent} />
      {this.props.children}
      <Footer content={headerContent} />
    </div>
  )
  }
  }

    AppEn.propTypes = {
    children: PropTypes.element.isRequired,
  }

    export default AppEn
