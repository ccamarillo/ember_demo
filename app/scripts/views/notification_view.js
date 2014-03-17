Ember2.NotificationView = Ember.View.extend({ 
  templateName: 'utils/notifications',
  
  notificationChanged: function() { 
    if (this.get('notification') !== null) { 
      this.set('message', this.get('notification').message);
      this.$()
        .addClass('visible')
        .addClass(this.get('notification').type);
      this.close();
    }
  }.observes('notification'),

  close: function() { 
    theElement = $(this.get('element'));
    var self = this;
    window.setTimeout(function() { 
      self.set('notification', '');
      theElement.removeClass('visible');
    }, 2000);
  },

});