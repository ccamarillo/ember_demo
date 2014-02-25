/*global Ember*/
Ember2.Client = DS.Model.extend({
    name: DS.attr('string'),
    projects: DS.hasMany('project', {async: true}),
});

// probably should be mixed-in...
Ember2.Client.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Ember2.Client.FIXTURES = [
  
  {
    id: 0,
    
    name: 'Diller Family Foundation',
    projects: [0, 1],
    
  },
  
  {
    id: 1,
    
    name: 'Urban Airship',
    
  }
  
];
