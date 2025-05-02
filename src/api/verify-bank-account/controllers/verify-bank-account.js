'use strict';

/**
 * verify-bank-account controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::verify-bank-account.verify-bank-account');
