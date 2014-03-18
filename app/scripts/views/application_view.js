Ember2.ApplicationView = Ember.View.extend({
  keyDown: function(e) {
    this.get('controller').send('updateKey', e.keyCode);
    return false;
  }
});