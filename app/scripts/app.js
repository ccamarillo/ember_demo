var Ember2 = window.Ember2 = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/vendor/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');


