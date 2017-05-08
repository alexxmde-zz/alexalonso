import React from 'react'
import Home from '../../pages/home/home'

export default class HomePageEn extends React.Component {
  render() {
    content = {
      whoAmI: `Hello, welcome! I'm Alex Alonso`,
      whatIdo: `I develop apps and websites!`,
      seeCurriculum: `See Curriculum`,
      seePortfolio: `See Portfolio`,
      sendMessage: `Send me a Message`
    }
    return (
      <Home content={content} />
    )
  }
}
