import React from 'react'
import Portfolio from '../../pages/portfolio/portfolio'

export default class PortfolioPageEn extends React.Component  {
  render() {
    const content = {
      davilariDescription:`Developed with Nodejs,
      JQuery and MongoDb, hosted ad Red Hat Openshift.
      It also has a CMS that manages the products, sales and
      ambiences data`,

      miriaFloresDescription: `Developed with NodeJs, React,
      React-Bootstrap and MongoDB. Hosted in UOL Host.
      It consist of a website powered by a CMS, plus other features
      involving real estate business logic`,

      artelazerDescription: `Developed in NodeJs, React, MongoDB,
      and hosted in Heroku. It's a CMS that powers a furniture website.`
    }

    return(
      <Portfolio content={content} />
    )
  }
}
