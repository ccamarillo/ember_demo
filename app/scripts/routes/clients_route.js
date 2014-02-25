Ember2.ClientsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('client');
  }
});

