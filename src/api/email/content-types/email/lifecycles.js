module.exports = {
    async afterCreate(event){
        const {result} = event
        try{
            await strapi.plugins["email"].services.email.send({
              to: `${user.email}`,
              subject: "Account confirmation",
              text: `Hello ${user.username}`,
              html: "<p>Thank you for registering!</p><p>You have to confirm your email address. Please click on the link below.</p><p><%= URL %>?confirmation=<%= CODE %></p><p>Thanks.</p>",
            });
        }
        catch(e){
            console.log(e);
        }
    }
}