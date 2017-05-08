import React from 'react'
import { Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import './css/header.css'

const Header = ({content}) => (
  <Col className="container-fluid">
    <Row>
      <Navbar id="navbar">
        <Navbar.Header>
          <Navbar.Brand id="nav-brand">
            <a href={content.homeLink}>
              Alex Alonso
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight id="nav-right">
            <NavItem href={content.curriculumLink}>{content.curriculum}</NavItem>
            <NavItem href={content.portfolioLink}>{content.portfolio}</NavItem>
            <NavItem href={content.contactLink}>{content.contact}</NavItem>
            <NavDropdown eventKey={3} title={content.language} id="basic-nav-dropdown">
              <MenuItem eventKey={3.4} href={content.linkPt}>Português</MenuItem>
              <MenuItem href={content.linkEn}>English</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Col>

)

  export default Header
