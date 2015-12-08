angular.module('app')
.factory('GameService', function($resource) {
    return $resource('api/game');
})
.controller('SearchGameCtrl', function($scope, $location, GameService) {
  $scope.backUrl = '#/';
  function success(response) {
    $scope.items = response;
    $scope.isLoading = false;
  };
  function error(error) {
    $scope.isLoading = false;
    // FIXME
    alert("c la merde");
  }
  function callServer() {
    $scope.isLoading = true;
    GameService.query($scope.query, success, error);
  };
  // INIT
  $scope.isLoading = false;
  callServer();
  // ACTION
  $scope.selectedIndex = null;
  $scope.selected = function() {
      return $scope.items[$scope.selectedIndex].name;
  };
  $scope.open = function(id) {
    $location.path('/game/'+id);
  };
 
  $scope.query = {
    filter: '',
    order: 'name',
    limit: 5,
    page: 1
  };


  $scope.search = function (predicate) {
  callServer();
  };

  $scope.onOrderChange = function (order) {
  callServer();
  };

  $scope.onPaginationChange = function (page, limit) {
  callServer();
  };


});
