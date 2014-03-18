Ember2.ProjectsView = Ember.View.extend({ 
  didInsertElement: function() { 
    return this.$().attr({ tabindex: 1 }), this.$().focus();
  }

});