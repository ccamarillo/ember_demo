Ember2.ProjectsCreateController = Ember.ObjectController.extend({
  needs: 'projects',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.project.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('project',this.get('model'));
    }
  }
});

