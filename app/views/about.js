var Menu, template;

template = require('templates/about');

Menu = Backbone.View.extend({
  initialize: function() {},
  render: function() {
    this.$el.html(template());
    return this.el;
  }
});

module.exports = Menu;