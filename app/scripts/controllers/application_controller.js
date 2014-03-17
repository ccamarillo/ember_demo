Ember2.ApplicationController = Ember.Controller.extend({ 
  closeNotification: function() { 
    this.set('notification', null);
  },

  notify: function(options) { 
    this.set('notification', options);
  }
});