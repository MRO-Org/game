angular.module('app.modules.profile', [
  'ngStorage',
])
.controller('ProfilCtrl', function($scope, $localStorage, $mdToast) {
	$scope.changed = false;
	// CONST
	$scope.wikiUrl = 'http://github.com/MRO-Org/contribute/';
	$scope.langs = [
		{ value: 'fr', 	name: 'Français' },
		{ value: 'en', 	name: 'English' }
	];
	$scope.backUrl = '#/home';
	// ACTIONS
	$scope.save = function() {
    	$scope.$storage.user = $scope.user;
    	$mdToast.show(
	    $mdToast.simple()
	        .textContent('Saved!')
	        .position('top right')
	        .hideDelay(3000)
	    );
	};
	// INIT
	var testDefaultUser = {
		name: 'mysusername',
		email: 'mysusername@gmail.com',
		lang: 'fr'
	};
	$scope.$storage = $localStorage.$default({
      	user: testDefaultUser
    });
    $scope.user = $scope.$storage.user;
});
