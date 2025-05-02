'use strict';

/**
 * verify-bank-account service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verify-bank-account.verify-bank-account');
