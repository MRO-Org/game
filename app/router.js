var Router, navbar, user;

navbar = require('views/navbar');

user = require('models/user');

Router = Backbone.Router.extend({
  initialize: function() {
    return this.navbar = new navbar({
      el: $('.root-view'),
      model: new user,
      router: this
    });
  },
  routes: {
    '': 'home',
    'home': 'home',
    'about': 'about',
    'notFound': 'notFound',
    '*notFound': 'notFound'
  }
});

module.exports = Router;