'use strict';

/**
 * verify-bank-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verify-bank-document.verify-bank-document');
