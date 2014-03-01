Ember2.ConfirmButtonComponent = Ember.Component.extend({
  
  showConfirm: false,
  actions: {
    confirm: function() { 
      console.log('confirm');
      this.set('showConfirm', true);
    },
    cancel: function() { 
      this.set('showConfirm', false);
    },
    doConfirm: function() { 
      console.log(this.get('model'));
      this.sendAction('action', this.get('model')); // THIS IS DEPRECATED, HOWEVER FOLLOWING THE DOCS
    }
  }

});