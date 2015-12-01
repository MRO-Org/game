
angular.module('app.version', [])

.factory('version', function() {
    return "0.1.0";
})

.directive('appVersion', function(version) {
  return {
    template: version
  };
})

;
