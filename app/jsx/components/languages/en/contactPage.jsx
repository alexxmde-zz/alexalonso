import React from 'react'
import Contato from '../../pages/contato/contato'

export default class ContactPageEn extends React.Component {
  render() {
    const content = {
      buttonSendMessage: 'Send Message',
      name: 'Name',
      message: 'Message',
      buttonMessageSent: 'Message sent!'
    }

    return(
      <Contato content={content} />
    )
  }
}
