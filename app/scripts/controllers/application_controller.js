Ember2.ApplicationController = Ember.Controller.extend({ 
  closeNotification: function() { 
    this.set('notification', null);
  },

  notify: function(options) { 
    this.set('notification', options);
  },

  keyCommand: '',

  actions: { 
    updateKey: function(keyCode) { 
      if (keyCode === 65) { 
        this.set('keyCommand', 'A');
      }
      if (keyCode === 27) { 
        this.set('keyCommand', 'ESC');
      }
    }
  },

  clearKeyCommand: function() { 
    this.set('keyCommand', '');
  }
  
});