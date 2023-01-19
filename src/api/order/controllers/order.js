'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');

module.exports = {
  async create(ctx) {
    strapi.service("api::order.sms").sendSms();
    return await strapi
      .service("api::order.order")
      .create(ctx.request.body);
  },

  async get(ctx) {
    return await strapi.service("api::order.order").get(ctx.request.body);
  },
};