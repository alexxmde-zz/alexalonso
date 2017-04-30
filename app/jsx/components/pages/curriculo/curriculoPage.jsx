import React from 'react'
import { Col, Row, Image, Glyphicon } from 'react-bootstrap'
import './css/curriculo.css'

const CurriculoPage = () => (
  <Col className="container-fluid">
    <Row>
      <Col xs={12} id="photo-container" className="text-center">
        <h1>Desenvolvedor Fullstack</h1>
        <Image src="/img/alex.jpg" id="photo" responsive />
        <h2 id="photo-description">Inglês fluente, experiênte
          em desenvolvimento web, mobile e desktop.</h2>
      </Col>
      <Col xs={12} id="habilidades" className="text-center">
        <Glyphicon glyph="tasks" className="glyph" />
        <h1>Habilidades</h1>
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
        <h4>Projetos desenvolvidos com uma stack full javascript.
          Utilizei React, Nodejs com express, mongoose e banco de
          dados MongoDB em todos os projetos do meu portfolio.
          Os projetos são CMSs que alimentam websites. Utilizei UOL Host,
          Heroku para testes e Red Hat Openshift para um dos projetos.
          2016 foi o ano em que decidi migrar de uma stack Microsoft
          para uma stack full javascript, passando também a utilizar o Linux
          como ambiente de desenvolvimento.
        </h4>
        <h3>2015</h3>
        <h3>Bonobo</h3>
        <h4>Em 2015 trabalhei em uma empresa com bastante caracteristicas
          de start-up. Atuei em projetos em PHP, Wordpress e prestei manutenção
          no código de um software de GED escrito em .Net. La, mantive e construí
          aplicações web para Friboi.</h4>
        <h3>2013-2014</h3>
        <h3>TCI BPO</h3>
        <h4>
          Durante o tempo que passei na empresa, desenvolvi e mantive o software
          de GED interno, desenvolvido em C#/.Net Windows Forms e SQL Server.
          Aprendi muito sobre .Net e principalmente banco de dados, ja que parte
          das regras do sistema era feita através de stored procedures e muita manutenção
          era feita diretamente no banco, o que exigia, muitas vezes, queries complexas.
        </h4>
        <h3>2012</h3>
        <h3>ConsultoriaSI</h3>
        <h4>
          Meu primeiro emprego, logo que terminei o curso técnico e o ensino médio.
          Desenvolvi websites em PHP e ASP.Net Webforms para Sabesp e Centro Paula
          Souza. Escrevi muito MySQL e muito PHP, na época, sem framework. Foi nessa
          empresa que aprendi o trivial do dia a dia de um desenvolvedor.
        </h4>
      </Col>
      <Col xs={12}  id="academica">
        <Glyphicon glyph="education" className="glyph" />
        <h1>Experiência Acadêmica</h1>
        <h3>2010-2011</h3>
        <h3>ETEC Centro Paula Souza - Informática (foco em desenvolvimento de software)</h3>
        <h4>
          Meu primeiro curso na área. Nele aprendi a criar aplicações Desktop Java e VB.Net. Aprendi
          também banco de dados e UML.
        </h4>
        <h3>2014 - Atualmente</h3>
        <h3>Fatec São Roque - Sistemas para Internet</h3>
        <h4>Curso focado em sistemas web. Os projetos desenvolvidos ao longo do curso estão disponíveis em meu Github</h4>
      </Col>

    </Row>
  </Col>
)

export default CurriculoPage
