  
var category = angular.module('category', ['ngRoute']);
category.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/:category_name', {
    templateUrl: 'template/category.html',
    controller: 'CategoryController'
      }).when('/', {
    templateUrl: 'template/category.html',
    controller: 'CategoryController'
      });
}]);
category.controller('CategoryController', ['$scope', '$filter','$routeParams','$http', function($scope, $filter,$routeParams,$http) {

  if($routeParams.category_name){
    $scope.category_name = $routeParams.category_name;
  }else{
    $scope.category_name = 'cosmetic';
  }

  $http.get("data/category.json").success(function (response) {
    $scope.categories = response;
  });

  $http.get("data/article.json").success(function (response) {
    $scope.articles = response;
  });

  $http.get("data/tag.json").success(function (response) {
    $scope.tags = response;
  });


  var orderBy = $filter('orderBy');

  $http.get("data/shop.json").success(function (response) {
    $scope.shops = response;
  });

  $scope.order = function(predicate, reverse) {
    $scope.shops = orderBy($scope.shops, predicate, reverse);
  };

  $scope.order('-age',false);

  

}]);
