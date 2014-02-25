Ember2.ClientRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('client', params.client_id);
  }
});

