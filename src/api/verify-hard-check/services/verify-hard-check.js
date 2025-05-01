'use strict';

/**
 * verify-hard-check service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verify-hard-check.verify-hard-check');
