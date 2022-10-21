module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ahteshambahi@gmail.com',
                from: 'baggage820@gmail.com',
                //   cc: 'valid email address',
                //   bcc: 'valid email address',
                  replyTo: 'baggage820@gmail.com',
                subject: 'Welcome to Baggage! Confirm Your Email',
                //   text: '${fieldName}', // Replace with a valid field ID
                html:
                    <>
                        <p>You're on your way! <br></br>
                            Let's confirm your email address.<br></br>
                            By clicking on the following link, you are confirming your email address.<br></br></p>
                        <button>Confirm Email Address</button>
                    </>,

            })
        } catch (err) {
            console.log(err);
        }
    }
}