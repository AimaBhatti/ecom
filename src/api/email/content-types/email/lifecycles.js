module.exports = {
  async afterCreate(event) {
    const { result } = event;
    let html ='<>Something</>'
    let subject = "No Subject"
      
    if (result.type === "confirmation") {
      subject = "Account confirmation";
      html =
        "<p>Thank you for registering!</p><p>You have to confirm your email address. Please click on the link below.</p><p><%= URL %>?confirmation=<%= CODE %></p><p>Thanks.</p>";
    } else if (result.type === "order") {
      subject = "Order Confirmation Notification";
      html =
        "<p>Dear User,</p><p>Your order is now confirmed and will soon be sent into processing. Please note that orders cannot be modified once they go into processing.</p><p>For any queries, please contact us at 021-111-222-333 or email us at <a>baggage820@gmail.com</a></p>";
    } else if (result.type === "new-order") {
      subject = "New Order";
      html = "<p>A new order has been placed by a customer!</p>";
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
