'use strict';
const CONST = require('../../common/constants');
const MultitenancyService = require('./MultitenancyService');
const logger = require('../../common/logger');

class ServiceType {
  static getService(ServiceType) {
    switch (ServiceType) {
    case CONST.MULTITENANCY_SERVICE_TYPE.MULTITENANCYSERVICE:
      return MultitenancyService;
    default:
      logger.error('Service does not exist:', ServiceType);
      break;
    }
  }
}

module.exports = ServiceType;