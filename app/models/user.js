var User;

User = Backbone.Model.extend({
  initialize: function() {
    return this.email = 'your@email.com';
  }
});

module.exports = User;