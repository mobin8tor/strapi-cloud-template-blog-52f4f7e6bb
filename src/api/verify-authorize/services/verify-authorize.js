'use strict';

/**
 * verify-authorize service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verify-authorize.verify-authorize');
