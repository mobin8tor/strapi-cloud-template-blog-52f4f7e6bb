'use strict';

/**
 * about-you-bankruptcy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eligibility-bankruptcy.eligibility-bankruptcy');
