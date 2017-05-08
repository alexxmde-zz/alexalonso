import React from 'react'
import { Col, Row, Image, Glyphicon } from 'react-bootstrap'
import './css/curriculo.css'

const Curriculo = ({content}) => (
  <Col className="container-fluid">
    <Row>
      <Col xs={12} id="photo-container" className="text-center">
        <h1>{content.title}</h1>
        <Image src="/img/alex.jpg" id="photo" responsive />
        <h2 id="photo-description">{content.description}</h2>
      </Col>
      <Col xs={12} id="habilidades" className="text-center">
        <Glyphicon glyph="tasks" className="glyph" />
        <h1>{content.skills}</h1>
        <h2>JavaScript</h2>
        <h4>NodeJs, Express, Mongoose, React, React Native, Webpack</h4>
        <h2>C#/.Net</h2>
        <h4>ASP.Net MVC, ASP.Net WebForms, .Net Windows Forms, ADO.Net, Entity Framework</h4>
        <h2>PHP</h2>
        <h4>Wordpress, MySQLi, PDO</h4>
        <h2>Linux</h2>
        <h4>Systemd, Ubuntu, Fedora, ArchLinux Core, httpd</h4>
      </Col>
      <Col xs={12} id="experiencia" className="text-center">
        <Glyphicon glyph="briefcase" className="glyph" />
        <h1>Experiência</h1>
        <h3>2016-2017</h3>
        <h3>Freelancer</h3>
        <h4>{content.freelancerText}</h4>
        <h3>2015</h3>
        <h3>Bonobo</h3>
        <h4>{content.bonoboText}</h4>
        <h3>2013-2014</h3>
        <h3>TCI BPO</h3>
        <h4>{content.TCIText}</h4>
        <h3>2012</h3>
        <h3>ConsultoriaSI</h3>
        <h4>{content.consultoriaSIText}</h4>
      </Col>
      <Col xs={12}  id="academica">
        <Glyphicon glyph="education" className="glyph" />
        <h1>{content.academic}</h1>
        <h3>2010-2011</h3>
        <h3>{content.etecTitle}</h3>
        <h4>{content.etecDescription}</h4>
        <h3>2014 - 2018</h3>
        <h3>{content.fatecTitle}</h3>
        <h4>{content.fatecDescription}</h4>
      </Col>

    </Row>
  </Col>
)

export default Curriculo
