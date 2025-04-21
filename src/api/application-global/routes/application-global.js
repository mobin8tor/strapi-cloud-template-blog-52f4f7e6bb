'use strict';

/**
 * application-global router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::application-global.application-global');
