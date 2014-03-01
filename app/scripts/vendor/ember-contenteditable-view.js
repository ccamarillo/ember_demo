Ember.ContenteditableView = Ember.View.extend({
  
  templateName: 'utils/ember-contenteditable',
  myTagName: function() { return this.get('myTagName') },
  classNames: ['ember-content-editable'],

  // Elements
  inputElement: null,
  revertButton: null,
  
  // Variables:
  editable: true,
  isUserTyping: false,
  userHasChanged: false,
  plaintext: false,
  initialContent: null,
  empty: false,
  required: false,

  // Properties:
  contenteditable: (function() {
    var editable = this.get('editable');

    return editable ? 'true' : undefined;
  }).property('editable'),

  // Observers:
  valueObserver: (function() {
    if (!this.get('isUserTyping') && this.get('value')) {
      return this.setContent();
    }
  }).observes('value'),

  // Events:
  didInsertElement: function() {
    this.set('initialContent', this.get('value'));
    inputElement = $('<' + this.myTagName + ' contenteditable="true">' + this.get('value') + '</' + this.myTagName + '>').appendTo($(this.get('element')));
    this.set('inputElement', inputElement);

    this.set('revertButton', $(this.get('element')).find('.revert-button'));
    this.get('revertButton').tooltip();
    
    var self = this;
    this.get('revertButton').click(function() { 
      self.revertContent();
    });

    this.setContent();
    
    return true;
  },
  

  focusOut: function() {
    return this.set('isUserTyping', false);
  },

  keyDown: function(event) {
    if (!event.metaKey) {
      return this.set('isUserTyping', true);
    }
  },

  keyUp: function(event) {
    if (!this.userHasChanged) { 
      this.set('userHasChanged', true);
      this.get('revertButton').show();
    } 

    if (this.get('inputElement').html() == this.get('initialContent') || this.get('inputElement').text() == this.get('initialContent')) { 
      this.revertContent();
    }

    if (this.get('inputElement').text().length > 0) {
      this.removeEmpty();
      return this.set('value', this.get('inputElement').text());
    } else if (this.get('inputElement').html().length > 0) { 
      this.removeEmpty();
      return this.set('value', this.get('inputElement').html()); 
    } else { 
      this.addEmpty(event);
    }
  },

  addEmpty: function(event) { 
    $(this.get('element')).addClass('empty');
    if (this.required) { 
      $(this.get('element')).addClass('required');
    }
  },

  removeEmpty: function() { 
    $(this.get('element')).removeClass('empty');
  },


  revertContent: function() { 
    this.set('value', this.get('initialContent'));
    this.setContent();
    this.set('userHasChanged', false);
    this.removeEmpty();

    return this.get('revertButton').hide();
    
  },
  
  setContent: function() {
    //return this.$().html(this.get('value'));
    return this.get('inputElement').html(this.get('value'));
  }
  
  
});