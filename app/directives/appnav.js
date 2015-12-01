angular.module('app.directives', [])


.directive('appNav', function() {
  return {
    templateUrl: 'app/directives/appnav.html'
  };
})

.controller('NavCtrl', function($scope) {
    $scope.isCollapsed = true;
});

;
