Ember2.ProjectController = Ember.ObjectController.extend({
  
  needs: ['application'],
  
  delete: function(model) { 
    
    try { 
      model.deleteRecord();

      if (model.get('isDeleted')) {
        model.save();
        this.transitionToRoute('projects');
        this.get('controllers.application').notify({message: 'The project was deleted.', type: 'success'});
      } else { 
        this.get('controllers.application').notify({message: 'There was an error while attempting to delete the project.', type: 'error'});
      }
    } catch (e) { 
      this.get('controllers.application').notify({message: '<strong>An exception occured while attempting to delete the project:</strong> ' + e.message, type: 'error'});
    }
    

  }
});