import React from 'react'
import Curriculo from  '../../pages/curriculo/curriculo'

export default class CurriculoPagePt extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  const content = {
  title: 'Desenvolvedor Fullstack',
    description: 'Inglês fluente, experiente em desenvolvimento web, mobile e desktop.',
    skills: 'Habilidades',
    freelancerText: `Projetos desenvolvidos com uma stack full javascript.
    Utilizei React, Nodejs com express, mongoose e banco de dados MongoDB
  em todos os projetos do meu portfolio. Os projetos são CMSs que 
  alimentam websites. Utilizei UOL Host, Heroku para testes e Red 
  Hat Openshift para um dos projetos. 2016 foi o ano em que decidi
  migrar de uma stack Microsoft para uma stack full javascript,
    passando também a utilizar o Linux como ambiente de desenvolvimento.`,

    bonoboText: `Em 2015 trabalhei em uma empresa com bastante caracteristicas
  de start-up. Atuei em projetos em PHP, Wordpress e prestei manutenção no 
  código de um software de GED escrito em .Net. La,
    mantive e construí aplicações web para Friboi.`,

    TCIText: `Durante o tempo que passei na empresa, desenvolvi e
  mantive o software de GED interno, desenvolvido em C#/.Net Windows
  Forms e SQL Server. Aprendi muito sobre .Net e principalmente banco de
  dados, haja vista que parte das regras do sistema era feita através de
  stored procedures e muita manutenção era feita diretamente no banco, o
  que exigia, muitas vezes, queries complexas.`,

    consultoriaSIText:` Meu primeiro emprego, logo que terminei 
  o curso técnico e o ensino médio. Desenvolvi 
  websites em PHP e ASP.Net Webforms 
  para Sabesp e Centro Paula Souza. Escrevi muito MySQL e
  muito PHP, na época, sem framework. Foi nessa empresa que
    aprendi o trivial do dia a dia de um desenvolvedor.`,
    academic: 'Experiência Acadêmica',

    etecTitle: `ETEC Centro Paula Souza - Informática (foco em desenvolvimento de software)`,

    etecDescription: `Meu primeiro curso na área. Nele aprendi a criar aplicações
  Desktop Java e VB.Net. Aprendi também banco de dados e UML.`,

    fatecTitle: `Fatec São Roque - Sistemas para Internet`,

    fatecDescription: `Curso focado em sistemas web. Os projetos 
  desenvolvidos ao longo do curso estão disponíveis em meu Github`


}
  return(
    <Curriculo content={content} />
)
}
}
