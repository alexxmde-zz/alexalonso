import React from 'react'
import Curriculo from '../../pages/curriculo/curriculo'

export default class CurriculoPageEn extends React.Component {
  render() {
    const content = {
      title: 'Fullstack Developer',
      description: 'Fluent english speaker, experienced in web, mobile and desktop development',
      skills: 'Skills',
      freelancerText: `Projects developed with a full javascript stack.
      I used React, Nodejs with Express and MongoDB in all the projects presented
      in my portfolio. Most of the projects consist in CMSs that powers content in a 
      SPA website. I used UOL Host(A brazilian hosting provider), Heroku and Red Had Openshift 
      for hosting the web apps. I'm actually migrating all of them to Heroku. 2016 was the year
      I decided to drop the Microsoft stack and go full open source, leaving Windows for Linux.`,

      bonoboText: `In 2015 I worked in a company that had many characteristics of a startup.
      I developed project in PHP, Wordpress and aided in the maintence of an ECM platform written in .Net.
      It was my first contact with real world front-end development, and I could learn a lot, and find out
      about React, Nodejs and all the cool open source stuff that made me change my stack a year later.`,

      TCIText: `Here in the course of nearly two years I developed and mantained an ECM platform.
      I dealt with a lot of SQLServer, as the software business rule were written in procedures, and
      C#/.Net (sometimes VB.Net) Windows Form and ASP.Net web forms applications.`,

      consultoriaSIText: `My first job, as soon as I finished highschool. I have learned PHP
      and ASP.Net Web Forms, and also MySQL. It was a very great experience because we, developers,
      had the freedom to choose our technology stack, even though we were just starting our carreers.`,

      etecTitle: `ETEC Centro Paula Souza - IT (Software developent)`,
      fatecTitle: `Fatec São Roque - Web Development`,
      fatecDescription: `A course focused on web development. From front-end to deployment techniques`,
      academic: 'Academic Experience'
    }
    return(
      <Curriculo content={content} />
    )
  }
}
