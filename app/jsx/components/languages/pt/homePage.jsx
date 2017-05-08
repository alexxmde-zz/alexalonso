import React from 'react'
import Home from '../../pages/home/home'

export default class HomePagePt extends React.Component {
  render() {
    const content = {
      whoAmI:'Olá, seja bem vindo! Eu sou Alex Alonso.',
      whatIdo: 'Eu desenvolvo websites, apps e sistemas!',
      seeCurriculum: 'Ver Currículo',
      seePortfolio: 'Ver Portfólio',
      sendMessage: 'Enviar Mensagem',
    }

    return (
      <Home content={content} />
    )
  }
}
