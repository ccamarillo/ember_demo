/*global Ember*/
Ember2.Project = DS.Model.extend({
    name: DS.attr('string'),
    project: DS.belongsTo('project'),
    description: DS.attr('string'),
});

// probably should be mixed-in...
Ember2.Project.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Ember2.Project.FIXTURES = [
  
  {
    id: 0,
    name: 'Diller Teen Fellows',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  },
  
  {
    id: 1,
    name: 'Tikun Olam Awards',
    description: 'This is a description of the Tikun Olam Awards project.',
  }
  
];
