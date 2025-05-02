'use strict';

/**
 * verify-soft-credit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verify-soft-credit.verify-soft-credit');
