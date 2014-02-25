Ember2.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  }
});

