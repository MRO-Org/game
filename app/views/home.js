var template = require('templates/home');

var Home = Backbone.View.extend({
  el: '#container',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(template());
  }
});

module.exports = Home;
