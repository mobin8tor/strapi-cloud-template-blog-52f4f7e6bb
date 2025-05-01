'use strict';

/**
 * verify-bank-account router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::verify-bank-account.verify-bank-account');
