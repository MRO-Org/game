angular.module('app.modules.home', [])

.controller('HomeCtrl', function($scope) {
  $scope.myInterval = 3*1000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'images/carousel-' + newWidth + '-300.jpg',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Swords', 'Princess', 'Dragon', 'Weapons'][slides.length % 4]
    });
  };
  for (var i=0; i<3; i++) {
    $scope.addSlide();
  }
});
