const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mydevelopings@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.
        WISH YOU A VERY HAPPY ANNIVERSARY!!!
        Best
        Rahul
        `,
        
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mydevelopings@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}