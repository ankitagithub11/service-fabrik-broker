'use strict';

const MultitenancyOperator = require('./multitenancy-operator/MultitenancyOperator');
const MultitenancylBindOperator = require('./multitenancy-operator/MultitenancyBindOperator');
const CONST = require('../common/constants');
// Services can use multi-tenancy operator by creating instance of MultitenancyOperator, MultitenancylBindOperator.
// Need to specify corresponding resource types
const postgresqlMTOperator = new MultitenancyOperator(CONST.APISERVER.RESOURCE_TYPES.POSTGRESQL_MT);
const postgresqlMTBindOperator = new MultitenancylBindOperator(CONST.APISERVER.RESOURCE_TYPES.POSTGRESQL_MT_BIND, CONST.APISERVER.RESOURCE_TYPES.POSTGRESQL_MT);
postgresqlMTOperator.init();
postgresqlMTBindOperator.init();