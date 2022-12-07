module.exports = {
  async afterCreate(event) {
    const { result } = event;
    let html ='<>Something</>'
    let subject = "No Subject"
      
    if (result.type === "confirmation") {
       subject = "Account confirmation";
       html =
         "<p>Thank you for registering!</p><p>You have to confirm your email address. Please click on the link below.</p><p><%= URL %>?confirmation=<%= CODE %></p><p>Thanks.</p>";
    }
    else if (result.type === "order") {
      subject = "Order";
      html = "<p>Thank you for trusting us and placing off an order. Your order will be delivered within 7 - 8 days.</p>"
    }
    else if (result.type === "new-order") {
      subject = "New Order";
      html = "<p>A new order has been posted by a customer!</p>";
    }
      try {
        await strapi.plugins["email"].services.email.send({
          to: `${result.email}`,
          subject,
          text: `Hello ${result.email}`,
          html,
        });
      } catch (e) {
        console.log(e);
      }
  },
};
