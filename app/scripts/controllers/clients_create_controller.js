Ember2.ClientsCreateController = Ember.ObjectController.extend({
  actions: { 
    save: function() {
      if (this.get('name') != '') { 
        var store = this.store;
        var client = store.createRecord('client', { 
          name: this.get('name')
        });
        this.transitionToRoute('clients');
      }
    }
  }
});
