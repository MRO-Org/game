var template = require('templates/notFound');

var Menu = Backbone.View.extend({
  initialize: function() {},
  render: function() {
    this.$el.html(template());
    return this.el;
  }
});

module.exports = Menu;