module.exports = ({ env }) => ({
 
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'baggage820@gmail.com',
          defaultReplyTo: 'baggage820@gmail.com',
        },
      },
    },
  });