angular.module("portfolio")
.controller("projectCtrl", projectCtrl)

function projectCtrl($scope) {
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

}
