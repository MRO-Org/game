angular.module('app')
.controller('SearchGameCtrl', function($scope, $location) {
  // INIT
  $scope.items = [
    {id: '1', name: 'Test2', fullName: 'Another game...', status: 'CLOSED', isDisabled: true },
    {id: '1', name: 'Test', fullName: 'A game about things...', status: 'CREATION', isDisabled: false }
  ];
  // ACTION
  $scope.selectedIndex = null;
  $scope.selected = function() {
      return $scope.items[$scope.selectedIndex].name;
  };
  $scope.submit = function() {
    $location.path('/game');
  };
});
