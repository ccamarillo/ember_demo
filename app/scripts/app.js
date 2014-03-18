var Ember2 = window.Ember2 = Ember.Application.create({
  LOG_TRANSITIONS: true

});

Ember2.EmptyFocusInputComponent = Ember.TextField.extend({
  becomeFocused: function() { 
    this.$().val('');
    this.$().focus();
    this.$().addClass('form-control');
    if (this.get('required') == 'true') { 
      this.$().addClass('required');
      this.$().attr('placeholder', this.$().attr('placeholder') + ' (required)');
    }
  }.on('didInsertElement')
});

Ember2.EmptyInputComponent = Ember.TextField.extend({
  becomeFocused: function() { 
    this.$().val('');
    this.$().addClass('form-control');
  }.on('didInsertElement')
});

/* Order and include as you please. */
require('scripts/vendor/*');
require('scripts/controllers/*');
require('scripts/components/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');


