  
var app = angular.module('footprint', ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
  templateUrl: 'template/footprint.html',
  controller: 'FootprintController'
      }).when('/map/:category', {
  templateUrl: 'template/footprint_map.html',
  controller: 'FootprintMapController'
      });
}]);



app.controller('FootprintController', ['$scope', '$filter', function($scope, $filter) {

  var orderBy = $filter('orderBy');

  $scope.shops = [{"name":"Id Nunc Inc.","category":"Ori","region":"Maine","date":"04-16-14"},{"name":"Lacus Aliquam LLC","category":"Flavia","region":"WY","date":"09-12-14"},{"name":"Sit Amet Institute","category":"Eve","region":"Montana","date":"03-17-15"},{"name":"Ut Nisi Inc.","category":"Carissa","region":"Massachusetts","date":"04-09-14"},{"name":"Aliquam Incorporated","category":"Anika","region":"Minnesota","date":"11-05-15"},{"name":"Ante Industries","category":"Stacey","region":"ME","date":"10-16-15"},{"name":"Tempor Consulting","category":"Alea","region":"GA","date":"06-22-14"},{"name":"Maecenas Company","category":"Victoria","region":"NE","date":"06-25-15"},{"name":"Ante Nunc Associates","category":"Sonya","region":"Wisconsin","date":"04-02-14"},{"name":"Egestas Nunc PC","category":"Angelica","region":"Virginia","date":"04-06-15"},{"name":"In Molestie Tortor Corp.","category":"Charlotte","region":"AK","date":"08-06-15"},{"name":"Ultricies Ornare Institute","category":"Lysandra","region":"Nevada","date":"12-29-15"},{"name":"Neque Ltd","category":"Quynn","region":"Maine","date":"12-21-14"},{"name":"Rutrum Justo Praesent Corporation","category":"Jael","region":"California","date":"03-20-16"}];

  $scope.order = function(predicate, reverse) {
    $scope.shops = orderBy($scope.shops, predicate, reverse);
  };

  $scope.order('-date',false);

}]);

app.controller('FootprintMapController', ['$scope', '$filter','$routeParams', function($scope, $filter,$routeParams) {

  $scope.category = $routeParams.category;

  //$scope.category = $routeParams.category;
  $scope.order('-age',false);

  $scope.categories = [
    {'name' : 'cosmetic'},
    {'name' : 'clothing'},
    {'name' : 'leisure'},
    {'name' : 'restaurant'},
    {'name' : 'books'},
    {'name' : 'audio equipment'},
    {'name' : 'salon'}
  ];
  $scope.mostvisitedshops = [
    {"name":"Id Nunc Inc."},
    {"name":"Lacus Aliquam LLC"},
    {"name":"Sit Amet Institute"},
    {"name":"Ut Nisi Inc."},
    {"name":"Aliquam Incorporated"},
    {"name":"Ante Industries"},
    {"name":"Tempor Consulting"},
    {"name":"Maecenas Company"},
    {"name":"Ante Nunc Associates"},
    ];
  $scope.notvistedshops = [
    {"name":"Quis Accumsan Convallis Company"},
    {"name":"Nunc Interdum Feugiat Ltd"},
    {"name":"Eget Venenatis Company"},
    {"name":"Non Industries"},
    {"name":"Elit Aliquam Auctor Consulting"},
    {"name":"Tellus PC"},
    {"name":"Semper Ltd"},
    {"name":"Ante Ipsum Institute"},
    {"name":"Pede Blandit Congue Corp."}
  ];

  var locations = [
    ['Bondi Beach', -33.890542, 151.274856,0],
    ['Coogee Beach', -33.923036, 151.259052, 0],
    ['Cronulla Beach', -34.028249, 151.157507, 1],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 0],
    ['Maroubra Beach', -33.950198, 151.259302, 0]
  ];
  
  $scope.updateData = function(category_name){
    // get the new locations of the footprint shops
    createMap(mlocations);
    // get the information of  the notvistedshops and most visted shop
  };
/*
  $scope.createMapByAddress = function(address){
    var geocoder = new google.maps.Geocoder();
    console.log(geocoder);
    var addressArrays;
    for (i = 0; i < address.length; i++) {
      geocoder.geocode( { 'address': address}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();

            addressArray=[address[i],latitude,longitude];
            addressArrays.push(addressArray);
            console.log(addressArray);
        }
      });
    }
    $scope.createMap(addressArrays);

  };
  $scope.createMapByAddress(["香港北角渣華道 18 號嘉匯商業大廈 2206 室"]);
  */
  $scope.createMap = function(locations){
      // google map
  
      

      var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';

      var icons = [
        iconURLPrefix + 'red-dot.png',
        iconURLPrefix + 'green-dot.png'
      ];
      var iconsLength = icons.length;

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon : icons[locations[i][3]]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }

  };
  $scope.createMap(locations);
  
}]);
