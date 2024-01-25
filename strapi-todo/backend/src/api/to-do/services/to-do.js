'use strict';

/**
 * to-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::to-do.to-do');
