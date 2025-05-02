'use strict';

/**
 * verify-authorize router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::verify-authorize.verify-authorize');
