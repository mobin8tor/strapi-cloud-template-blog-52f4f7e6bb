'use strict';

/**
 * verify-authorize controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::verify-authorize.verify-authorize');
