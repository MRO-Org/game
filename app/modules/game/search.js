angular.module('app')
.controller('SearchGameCtrl', function($scope, $location) {
  $scope.backUrl = '#/';
  // INIT
  $scope.items = [
    {id: '1', name: 'Test2', fullName: 'Another game...', status: 'CLOSED', isDisabled: true },
    {id: '2', name: 'Test', fullName: 'A game about things...', status: 'CREATION', isDisabled: false }
  ];
  // ACTION
  $scope.selectedIndex = null;
  $scope.selected = function() {
      return $scope.items[$scope.selectedIndex].name;
  };
  $scope.open = function(id) {
    // TODO
    $location.path('/game');
  };

  // TEST
  
  $scope.selected = [];

  $scope.query = {
    filter: '',
    order: 'name',
    limit: 5,
    page: 1
  };

  function success(desserts) {
    $scope.desserts = desserts;
  }

  // in the future we may see a few built in alternate headers but in the mean time
  // you can implement your own search header and do something like
  $scope.search = function (predicate) {
    $scope.filter = predicate;
    $scope.deferred = $nutrition.desserts.get($scope.query, success).$promise;
  };

  $scope.onOrderChange = function (order) {
    return $nutrition.desserts.get($scope.query, success).$promise; 
  };

  $scope.onPaginationChange = function (page, limit) {
    return $nutrition.desserts.get($scope.query, success).$promise; 
  };


});
