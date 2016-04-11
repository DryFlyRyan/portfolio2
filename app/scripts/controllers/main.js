angular.module("portfolio")
.controller("mainCtrl", mainCtrl)

function mainCtrl($scope) {
  $scope.BioFocus = false;
  $scope.PortfolioFocus = false;
  $scope.ContactFocus = false;

  $scope.landingPageToggle = function() {
    if (!$scope.BioFocus && !$scope.PortfolioFocus && !$scope.ContactFocus){
    $scope.landingPage = true;
    } else {
    $scope.landingPage = false;
    }
  }

  $scope.toggleFocus = function(element){
    if (element === "biography") {
      $scope.BioFocus = !$scope.BioFocus;
      $scope.PortfolioFocus = false;
      $scope.ContactFocus = false;
    } else if (element === "portfolio") {
      $scope.PortfolioFocus = !$scope.PortfolioFocus;
      $scope.BioFocus = false;
      $scope.ContactFocus = false;
    } else if (element === "contact") {
      $scope.ContactFocus = !$scope.ContactFocus;
      $scope.BioFocus = false;
      $scope.PortfolioFocus = false;
    }
    $scope.landingPageToggle();
  };
}
