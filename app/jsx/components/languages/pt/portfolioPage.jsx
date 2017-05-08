import React from 'react'
import Portfolio from  '../../pages/portfolio/portfolio'

export default class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const content = {
      davilariDescription: `Desenvolvido em NodeJs, 
      JQuery e MongoDB, hospedado no 
      Red Hat OpenShift. Possuí também
      um CMS que gerencia os produtos,
      promoções, ambientes e acabamentos.`,

      miriaFloresDescription: `Desenvolvido em NodeJs, React,
      React-Bootstrap e MongoDB. Hospedado no UOLHost.
      Além do site, o projeto abrange um CMS que controla
      todas as informações dos imóveis da corretora.`,

      artelazerDescription: `Desenvolvido em NodeJs, React,
      MongoDb e hospedado no Heroku. O projeto também conta 
      com um CMS para gerenciar os dados dos móveis,
      ambientes e promoções do website.`
    }

    return (
      <Portfolio content={content} />
    )
  }
}

