  
var app = angular.module('shop', ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
  templateUrl: 'template/shop.html',
  controller: 'ShopController'
      });
}]);



app.controller('ShopController', ['$scope', '$filter','$http', function($scope, $filter,$http) {
  shop =  {
    "logo" : "http://www.goupmall.com/shop_files/s926/photo/400x267/P1_z1348479063.jpg",
    "shopname" : "Touch Hair Salon",
    "category" : "Cosmetic",
    "telephone" : "63335919",
    "address" : "香港銅鑼灣怡和街 56-58 號新基商業大廈 20 樓",
    "open_hour" : "星期一至五 10:00-20:00",
    "description" : "Touch Hair Salon 位於銅鑼灣中心地帶，距離港鐵站只有 5 分鐘腳程，店舖面積逾千尺，更可眺望維港海景，務求令客人得到最頂級的舒適享受。",
    "photos" : [
      {"src" : "img/banner1.jpg"},
      {"src" : "img/banner2.jpg"},
      {"src" : "img/banner3.jpg"},
      {"src" : "img/banner4.jpg"}
    ],
    "products": [
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/1001449921__175x175__.jpg",
        "name":"莫蒂膚®達人精選修容組",
        "price":"HKD$1,295"
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/644795647__175x175__.jpg",
        "name":"莫蒂膚®礦美人親膚粉底液",
        "price":"HKD$1,090"
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/923490999__175x175__.jpg",
        "name":"莫蒂膚®粉底刷",
        "price":"HKD$685"
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/985410087__175x175__.jpg",
        "name":"莫蒂膚®拉拉系列四色霜妍粉餅",
        "price":"HKD$1,275"
      }
    ],
    "special" : [
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/1001449917__175x175__.jpg",
        "name":"莫蒂膚®極致霜狀粉餅",
        "speical_price":"HKD$925",
        "old_price" : "HKD 9250$ "
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/830636066__175x175__.jpg",
        "name":"莫蒂膚®礦妍兩用粉餅",
        "speical_price":"HKD$1,110",
        "old_price" : "HKD$  1100"
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/751488144__175x175__.jpg",
        "name":"莫蒂膚®四色霜妍粉餅",
        "speical_price":"HKD$1,275",
        "old_price" : "HKD$  2750"
      },
      {
        "image":"http://edge.shop.com/ccimg.shop.com/240000/246200/246294/products/923491005__175x175__.jpg",
        "name":"莫蒂膚®蜜粉刷",
        "speical_price":"HKD$560",
        "old_price" : "HKD 5600$ "
      }
    ]
  };
  $http.get("data/article.json").success(function (response) {
    $scope.articles = response;
  });

  $scope.subscribe_count = 1200;
  $scope.clicked = false;
  $scope.text_subscribe='subscribe';
  $scope.subscribe = function(){
    if($scope.clicked==true){
      $scope.subscribe_count--;
      $scope.text_subscribe='subscribe';
    }else{
      $scope.subscribe_count++;
      $scope.text_subscribe='unsubscribe';
    }
  };

  $scope.logo = shop.logo;
  $scope.shopname = shop.shopname;
  $scope.category = shop.category;
  $scope.telephone = shop.telephone;
  $scope.address = shop.address;
  $scope.open_hour = shop.open_hour;
  $scope.description = shop.description;
  $scope.photos = shop.photos;
  $scope.products = shop.products;
  $scope.special = shop.special;

}]);

