angular.module('app.version', [])

.factory('version', function() {
    return "alpha";
})

.directive('appVersion', function(version) {
  return {
    template: version
  };
});