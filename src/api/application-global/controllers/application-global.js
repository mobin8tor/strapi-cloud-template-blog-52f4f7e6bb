'use strict';

/**
 * application-global controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::application-global.application-global');
