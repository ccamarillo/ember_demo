Ember2.ClientsCreateRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('client');
  }
});