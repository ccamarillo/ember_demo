/*global Ember*/
Ember2.User = DS.Model.extend({
    name: DS.attr('string')
});

// probably should be mixed-in...
Ember2.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Ember2.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'bar'
    
  }
  
];
