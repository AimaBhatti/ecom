"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter('api::order.order');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/orders",
      handler: "order.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/orders",
      handler: "order.get",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
