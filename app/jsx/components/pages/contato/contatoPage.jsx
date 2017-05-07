import React from 'react'
import { Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './css/contato.css'

class ContatoPage extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onNomeChange = this.onNomeChange.bind(this)
    this.onMensagemChange = this.onMensagemChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)

    this.state = {
      nome: '',
      email: '',
      mensagem: '',
      buttonText: 'Enviar Mensagem',
      enviando: false,
      enviado: false,
      textoValidacao: '',
      bsStyle: 'primary',
    }
  }
  onNomeChange(e) {
    this.setState({ nome: e.target.value })
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  onMensagemChange(e) {
    this.setState({ mensagem: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    if (!this.state.enviando && this.validaFormulario() && !this.state.enviado) {
      this.setState({ enviando: true })
      this.enviarMensagem()
    }
  }

  validaFormulario() {
    let ehValido = true

    if (!this.state.nome) {
      ehValido = false
    }
    if (!this.state.mensagem) {
      ehValido = false
    }
    if (!this.state.email) {
      ehValido = false
    }

    if (!ehValido) {
      this.setState({ textoValidacao: 'Preencha todos os campos!' })
    }

    return ehValido
  }
  enviarMensagem() {
    this.setState({ buttonText: 'Enviando...' })
    fetch('https://alexalonso.com.br/enviarMensagem', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((response) => {
      response.text().then((text) => {
        if (response.ok) {
          this.setState({
            buttonText: 'Mensagem enviada',
            bsStyle: 'success',
          })
        } else {
          console.log(text)
        }
      })
    }).catch(err => console.log(err))
  }
  render() {
    let validacao = null
    if (this.state.textoValidacao) {
      validacao = <h3>{this.state.textoValidacao}</h3>
    }
    return (
      <Col className="container-fluid">
        <Row id="contato">
          <Col xs={12} md={8} mdOffset={2} >
            <form onSubmit={this.onSubmit}>
              <h1 className="text-center">Envie uma mensagem</h1>
              <FormGroup>
                <ControlLabel>Nome</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.nome}
                  placeholder="Seu nome..."
                  onChange={this.onNomeChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  placeholder="Seu email..."
                  onChange={this.onEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Mensagem</ControlLabel>
                <FormControl
                  id="mensagem"
                  componentClass="textarea"
                  value={this.state.mensagem}
                  placeholder="Mensagem"
                  onChange={this.onMensagemChange}
                />
              </FormGroup>
              <Col xs={12} md={8} mdOffset={2} id="validacao">
                {validacao}
              </Col>
              <Button
                type="submit"
                bsStyle={this.state.bsStyle}
                className="form-control"
              >
                {this.state.buttonText}
              </Button>
            </form>
          </Col>
        </Row>
      </Col>
    )
  }
}
export default ContatoPage
