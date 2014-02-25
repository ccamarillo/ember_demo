Ember2.ProjectsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('project');
  }
});

