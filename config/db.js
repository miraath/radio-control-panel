var config = {};

config.uri = "mongodb://miraathdemo:controlpaneldemo@ds141368.mlab.com:41368/miraath-panel";

config.cookieMaxAge = 30 * 24 * 3600 * 1000;  //session cookie expiration date
config.cookieMinAge = 3600 * 1000; 

module.exports = config;


