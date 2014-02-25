Ember.ContenteditableView = Ember.View.extend({
  tagName: function() { return this.get('tag') },
  attributeBindings: ['contenteditable'],

  // Variables:

  editable: true,
  isUserTyping: false,
  userHasChanged: false,
  plaintext: false,
  revertButton: null,
  initialContent: null,

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
    return this.setContent();
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
      this.addRevertButton(event);
    }

    if (this.$().html() == this.get('initialContent') || this.$().text() == this.get('initialContent')) { 
      this.revertContent();
    }

    if (this.get('plaintext')) {
      return this.set('value', this.$().text());
    } else {
      return this.set('value', this.$().html());
    }
  },

  addRevertButton: function(event) { 
    this.set('revertButton', $('<a class="pull-right btn btn-link muted btn-sm" data-toggle="tooltip" data-placement="top" title="Revert Changes" style="margin-top: 3px; margin-right: 2px;"><span class="glyphicon glyphicon-floppy-remove text-muted"></span></a>').insertBefore(event.target));
    this.get('revertButton').tooltip();
    var self = this;
    return this.get('revertButton').click(function() { 
      self.revertContent();
    });
  },

  revertContent: function() { 
    this.set('value', this.get('initialContent'));
    this.setContent();
    this.set('userHasChanged', false);
    this.get('revertButton').tooltip('destroy')
    return this.get('revertButton').remove();
  },

  setContent: function() {
    return this.$().html(this.get('value'));
  }
});