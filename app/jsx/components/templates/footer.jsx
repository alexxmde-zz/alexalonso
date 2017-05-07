import React from 'react'
import { Col, Row, Glyphicon, Image } from 'react-bootstrap'
import './css/footer.css'

const Footer = () => (
  <Col className="container-fluid" id="footer">
    <Row>
      <Col xs={12} md={4} mdOffset={2} id="mapa-do-site">
        <h1>Alex Alonso</h1>
        <h3>
          <a href="/#/">
            <Glyphicon glyph="home" />Home
          </a>
        </h3>
        <h3>
          <a href="/#/curriculo">
            <Glyphicon glyph="file" />Currículo
          </a>
        </h3>
        <h3>
          <a href="/#/portfolio">
            <Glyphicon glyph="book" />Portfolio
        </a></h3>
        <h3>
          <a href="/#/contato">
            <Glyphicon glyph="send" />Contato
          </a>
        </h3>
      </Col>
      <Col xs={12} md={4} mdOffset={1} id="mapa-do-site">
        <h1>Redes Sociais</h1>
        <h3>
          <a href="https://www.facebook.com/alexalonsosistemas/">
            <Image src="/img/facebook.png" className="footer-image" /> Facebook
          </a>
        </h3>
        <h3>
          <a href="https://twitter.com/Alex_D_Alonso">
            <Image src="/img/twitter.png" className="footer-image" /> Twitter
          </a>
        </h3>
        <h3>
          <a href="https://www.linkedin.com/in/alex-alonso-bb108286/">
            <Image src="/img/linkedin.png" className="footer-image" /> LinkedIn
          </a>
        </h3>
      </Col>

    </Row>
  </Col>
)

export default Footer
