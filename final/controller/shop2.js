  
var app = angular.module('shop', ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
  templateUrl: 'template/shop.html',
  controller: 'ShopController'
      });
}]);



app.controller('ShopController', ['$scope', '$filter', function($scope, $filter) {
  shop = 
  {
    "logo" : "http://www.goupmall.com/shop_files/s926/photo/400x267/P1_z1348479063.jpg",
    "shopname" : "Touch Hair Salon",
    "category" : "Cosmetic",
    "telephone" : "63335919",
    "address" : "香港銅鑼灣怡和街 56-58 號新基商業大廈 20 樓",
    "open_hour" : "6pm-12am",
    "description" : "Touch Hair Salon 位於銅鑼灣中心地帶，距離港鐵站只有 5 分鐘腳程，店舖面積逾千尺，更可眺望維港海景，務求令客人得到最頂級的舒適享受。"
  };
  $scope.logo = shop.logo;
  $scope.shopname = shop.shopname;
  $scope.category = shop.category;
  $scope.telephone = shop.telephone;
  $scope.address = shop.address;
  $scope.open_hour = shop.open_hour;
  $scope.description = shop.description;

}]);
