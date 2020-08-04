const defaults = require('./common/defaults');
const isSubscription = require('./common/isSubscription');

const {
  getDDPLink,
  DDPLink,
  DDPMethodLink,
  DDPSubscriptionLink,
} = require('./client/apollo-link-ddp');

const meteorAuthLink = require('./client/apollo-link-meteor-auth');
const createGraphQLFetcher = require('./client/graphQLFetcher');

module.exports = {
  ...defaults,
  isSubscription,
  getDDPLink,
  DDPLink,
  DDPMethodLink,
  DDPSubscriptionLink,
  meteorAuthLink,
  createGraphQLFetcher,
};
