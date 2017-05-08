import React from 'react'
import './sections/css/greeting.css'
import { Row, Col, Image, Glyphicon } from 'react-bootstrap'

export default ({content}) => (
  <Col className="container-fluid">
    <Row>
      <Col xs={12} id="photo-container" className="text-center">

        <Image id="photo-logo" src="/img/alexalonso.png" responsive />
        <Image id="photo-big" src="/img/alex.jpg" rounded responsive />
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="text-center" id="greeting">

        <h1>{content.whoAmI}</h1>
        <h1>{content.whatIdo}</h1>
      </Col>

      <Col xs={12} id="options">
        <Col xs={12} sm={4} className="option" id="curriculum-container">
          <a href="/#/curriculo">
            <div id="curriculum-border">
              <Glyphicon glyph="file" id="curriculum-glyph" />
              <h3>{content.seeCurriculum}</h3>
            </div>
          </a>
        </Col>

        <Col xs={12} sm={4} className="option" id="portfolio-container">
          <a href="/#/portfolio">
            <div id="portfolio-border">
              <Glyphicon glyph="book" id="book-glyph" />
              <h3>{content.seePortfolio}</h3>
            </div>
          </a>
        </Col>

        <Col xs={12} sm={4} className="option text-center">
          <a href="/#/contato">
            <Col id="contact-border">
              <Glyphicon glyph="send" id="contact-glyph" />
              <h3>{content.sendMessage}</h3>
            </Col>
          </a>
        </Col>
      </Col>
    </Row>
  </Col>
)
