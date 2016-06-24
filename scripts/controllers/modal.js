angular.module('portfolio')
.controller('modalCtrl', [
  '$scope',
  '$element',
  'project',
  'close',
  function(
    $scope,
    $element,
    project,
    close) {

  $scope.name = null;
  $scope.age = null;
  $scope.project = project;

  $scope.close = function() {
 	  close({
    }, 500);
  };

  $scope.cancel = function() {
    $element.modal('hide');
    close({}, 500);
  };

}]);
