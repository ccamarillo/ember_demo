Ember2.ClientEditController = Ember.ObjectController.extend({
  needs: 'client',
  actions: {
    save: function(){
      self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.client.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('client',this.get('model'));
    }
  }
});

