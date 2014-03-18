Ember2.ProjectsCreateController = Ember.ObjectController.extend({
  name: '',
  description: '',
  actions: { 
    save: function() {
      if (this.get('name') !== '') { 
        var store = this.store;
        var project = store.createRecord('project', { 
          name: this.get('name'),
          description: this.get('description')
        });
        project.save();
        this.transitionToRoute('projects');
      }
    }
  }
});

