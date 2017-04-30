import React from 'react'
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => (
  <Col className="container-fluid">
    <Row>
      <Navbar id="navbar">
        <Navbar.Header>
          <Navbar.Brand id="nav-brand">
            <a href="/">
              Alex Alonso
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight id="nav-right">
            <NavItem href="/#/curriculo">Currículo</NavItem>
            <NavItem href="/#/portfolio">Portfolio</NavItem>
            <NavItem href="/#Contato">Contato</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Col>

)

export default Header
