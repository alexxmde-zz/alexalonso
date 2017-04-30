const express = require('express')
const nodemailer = require('nodemailer')
const config = require('./config')

const router = new express.Router();
router.post('/enviarMensagem', (req, res) => {
  function createHtml(body) {
    const html = `
<div>
<p>Nome: ${body.nome}</p>
<p>Email: ${body.email}</p>
<p>Mensagem: ${body.mensagem}</p>
</div>`

    return html
  }

  const transporter = nodemailer.createTransport({
    debug: true,
    logger: true,
    host: 'smtp.zoho.com',
    port: 587,
    auth: {
      user: 'notificacao@webyang.com.br',
      pass: config.emailPassword,
    },
  })
  const mailOptions = {
    from: 'notificacao@webyang.com.br',
    to: 'alex.xmde@gmail.com',
    subject: 'Mensagem do Website',
    html: createHtml(req.body),
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.send()
  })
})


module.exports = router;
