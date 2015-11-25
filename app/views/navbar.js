var template = require('templates/navbar');

var home = require('views/home');
var about = require('views/about');
var notFound = require('views/notFound');

var NavBar = Backbone.View.extend({
  initialize: function(options) {
    var _this = this;
    this.home_view = new home();
    this.about_view = new about();
    this.notFound_view = new notFound();
    options.router.on('route:home', function() {
      _this.page = 'home';
      return _this.render();
    });
    options.router.on('route:notFound', function() {
      _this.page = 'notFound';
      return _this.render();
    });
    return options.router.on('route:about', function() {
      _this.page = 'about';
      return _this.render();
    });
  },
  render: function() {
    if (!this.page) {
      this.page = Backbone.history.fragment;
    }
    if (this.page === '') {
      this.page = 'home';
    }
    this.$el.html(template({
      page: this.page
    }));
    this["" + this.page + "_view"].setElement(this.$('.content-body')).render();
    this.el;
  }
});

module.exports = NavBar;