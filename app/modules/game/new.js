angular.module('app')
.controller('NewGameCtrl', function($scope, $location) {
	// ACTION
  $scope.submit = function() {
    $location.path('/game');
  };
	// INIT
	$scope.game = {
      type : 'role'
    };
	 $scope.avatarData = [{
        id: "social:group",
        title: 'Role Play: no rules, only people',
        value: 'role'
      },{
        id: "mdi:map",
        title: 'Tabletop: Play with virtual table',
        value: 'tabletop'
      },{
        id: "mdi:dice",
        title: 'The D20 System: Role Play with virtual table and D20',
        value: 'd20'
   	 },{
        id: "mdi:sword",
        title: 'AD&D like',
        value: 'community-adnd_clone'
      }];
});
