angular.module("portfolio")
.controller("boxController", boxController)

function boxController($scope) {
  $scope.BioFocus = false;
  $scope.PortfolioFocus = false;
  $scope.ContactFocus = false;

  $scope.landingPageToggle = function() {
    if ($scope.BioFocus === false && $scope.PortfolioFocus === false && $scope.ContactFocus === false){
    $scope.landingPage = true;
    } else {
    $scope.landingPage = false;
    }
  }

  $scope.toggleFocus = function(element){
    if (element === "biography") {
      if ($scope.BioFocus === false) {
        $scope.BioFocus = true;
      } else if ($scope.BioFocus === true) {
        $scope.BioFocus = false;
      }
      $scope.PortfolioFocus = false;
      $scope.ContactFocus = false;
    } else if (element === "portfolio") {
      if ($scope.PortfolioFocus === false) {
        $scope.PortfolioFocus = true;
      } else if ($scope.PortfolioFocus === true) {
        $scope.PortfolioFocus = false;
      }
      $scope.BioFocus = false;
      $scope.ContactFocus = false;
    } else if (element === "contact") {
      if ($scope.ContactFocus === false) {
        $scope.ContactFocus = true;
      } else if ($scope.ContactFocus === true) {
        $scope.ContactFocus = false;
      }
      $scope.BioFocus = false;
      $scope.PortfolioFocus = false;
    }
    $scope.landingPageToggle();
  };
}
