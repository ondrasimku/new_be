module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.seznam.cz',
                port: 465,
                auth: {
                    user: 'mailsender@ppwebs.cz',
                    pass: 'MailSender1488',
                },

            },
            settings: {
                defaultFrom: 'mailsender@ppwebs.cz',
                defaultReplyTo: 'mailsender@ppwebs.cz',
            },
        },
    },

});