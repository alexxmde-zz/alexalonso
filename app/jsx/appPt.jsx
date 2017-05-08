import React from 'react';
import PropTypes from 'prop-types'
import Header from './components/templates/header'
import Footer from './components/templates/footer'
import './css/global.css'

class AppPt extends React.Component {
  render() {
  const headerContent = {
  curriculumLink: '/#/pt/curriculo',
    curriculum: 'Curriculo',
    portfolio: 'Portfólio',
    portfolioLink: '/#/pt/portfolio',
    contact: 'Contato',
    contactLink: '/#/pt/contato',
    home: 'Home',
    homeLink: '/#/pt',
    socialNetworks: 'Redes Sociais',
    language: 'Language',
    linkPt:'/#/pt',
    linkEn:'/#/en'
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

    AppPt.propTypes = {
    children: PropTypes.element.isRequired,
  }

    export default AppPt
