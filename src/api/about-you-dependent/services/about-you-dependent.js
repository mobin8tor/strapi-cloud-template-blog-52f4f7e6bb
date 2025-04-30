'use strict';

/**
 * about-you-dependent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-you-dependent.about-you-dependent');
