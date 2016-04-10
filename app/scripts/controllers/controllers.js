angular.module("portfolio")
.controller("boxController", boxController)
.controller("portfolioController", portfolioController)

function boxController($scope) {
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

function portfolioController($scope) {
  $scope.portfolioItems = [
    {
      description: "This is a short description that will tease a longer description. This is a short description that will tease a longer description. This is a short description that will tease a longer description. This is a short description that will tease a longer description."
    },
    {
      description: "This is a short description that will tease a longer description."
    },
    {
      description: "This is a medium-sized description containing more lines than the short description, but fewer than the longer description for testing the masonry directive"
    },
    {
      description: "This is another short description for testing more things"
    },
    {
      description: "Short, shorty, short."
    },
    {
      description: "This is a short description that will tease a longer description."
    },
    {
      description: "This is a medium-sized description containing more lines than the short description, but fewer than the longer description for testing the masonry directive"
    },
    {
      description: "This is another short description for testing more things"
    },
    {
      description: "This is a short description that will tease a longer description."
    },
    {
      description: "This is a medium-sized description containing more lines than the short description, but fewer than the longer description for testing the masonry directive"
    },
    {
      description: "This is another short description for testing more things"
    }
  ]

  function randomizeColor() {
    var colorArray = [
      '#f6511d;',
      '#ffb400;',
      '#00a6ed;',
      '#7fb800;',
      '#0d2c54;'
    ]
    return colorArray[Math.floor(Math.random() * colorArray.length)]
  }

  function colorChecker(currentElement, lastElement) {
    var background = randomizeColor();
    console.log("coloro checker bg: ", background);
    if (lastElement) {
      if (lastElement.background === background) {
        return colorChecker(currentElement, lastElement)
      } else {
        return background;
      }
    } else {
      return background;
    }
  }



  function assignRandomColor(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i-1]) {
        var background = colorChecker(array[i], array[i-1]);
        console.log(background);
        array[i].background = background;
      } else {
        var background = colorChecker(array[i]);
        console.log(background);
        array[i].background = background;
      }
    }
  }

  assignRandomColor($scope.portfolioItems);
  console.log($scope.portfolioItems);
}
