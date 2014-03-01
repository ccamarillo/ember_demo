Ember2.ProjectController = Ember.ObjectController.extend({
  delete: function(model) { 
    
    model.deleteRecord();

    if (model.get('isDeleted')) {
      model.save();
      this.transitionTo('projects');
    } else { 
      alert('could not delete!')
    }

  }
});