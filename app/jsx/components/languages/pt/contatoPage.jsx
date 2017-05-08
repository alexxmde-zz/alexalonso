import React from 'react'
import Contato from '../../pages/contato/contato'

export default class ContatoPagePt extends React.Component {
  render() {
    const content = {
      buttonSendMessage: 'Enviar Mensagem',
      name: 'Nome',
      message: 'Mensagem',
      buttonMessageSent: 'Mensagem Enviada!'
    }

    return(
      <Contato content={content} />
    )
  }
}
