'use strict';

/**
 * test-user-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-user-collection.test-user-collection');
