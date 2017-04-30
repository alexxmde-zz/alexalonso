import React from 'react'
import { Row, Col, Image, Glyphicon } from 'react-bootstrap'
import './css/portfolio.css'

const PortfolioPage = () => (
  <Col className="container-fluid">
    <Row>
      <Col xs={12} id="portfolio" className="text-center">
        <Glyphicon glyph="book" id="portfolio-glyph" />
        <h1>Portfolio</h1>
      </Col>

      <Col xs={12} id="portfolio-items" className="text-center">
        <Col xs={12} md={6} className="portfolio-item">
          <a href="http://www.davilari.com.br">
            <Image src="/img/davilari.jpg" responsive className="portfolio-image" />
            <h1>Davilari</h1>
            <h3>Desenvolvido em NodeJs, JQuery e MongoDB, hospedado no Red Hat OpenShift</h3>
          </a>
        </Col>
        <Col xs={12} md={6} className="portfolio-item">
          <a href="http://www.mfloresimoveis.com.br">
            <Image src="/img/mflores.png" className="portfolio-image" responsive />
            <h1>Miria Flores Imóveis</h1>
            <h3>Desenvolvido em NodeJs, React, React-Bootstrap e MongoDB. Hospedado no UOLHost</h3>
          </a>
        </Col>

      </Col>
    </Row>
  </Col>
)

export default PortfolioPage

