'use strict';

/**
 * application-global service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-global.application-global');
