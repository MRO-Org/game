var router, theRouter;

router = require('router');

theRouter = new router;

$(document).on('click', 'a:not([data-bypass])', function(evt) {
  var href, root;
  href = {
    prop: $(this).prop('href'),
    attr: $(this).attr('href')
  };
  root = "" + location.protocol + "//" + location.host;
  if (href.prop && href.prop.slice(0, root.length) === root) {
    evt.preventDefault();
    return Backbone.history.navigate(href.attr, true);
  }
});

$(function() {
  return Backbone.history.start({
    pushState: true
  });
});