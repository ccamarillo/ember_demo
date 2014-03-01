Ember2.Router.map(function () {
  
  this.resource('clients', function(){
    this.resource('client', { path: '/:client_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('projects', function(){
    this.route('create');
  });

  this.route('project', { path: 'project/:project_id' });
  
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
