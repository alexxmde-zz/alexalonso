import React from 'react'
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => (
  <Col className="container">
    <Row>
      <Navbar id="navbar">
        <Navbar.Header>
          <Navbar.Brand id="nav-brand">
            Alex Alonso
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight id="nav-right">
            <NavItem href="/#Habilidades">Currículo</NavItem>
            <NavItem href="/#Portfolio">Portfolio</NavItem>
            <NavItem href="/#Contato">Contato</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Col>

)

export default Header
