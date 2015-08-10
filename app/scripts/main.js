'use strict';

var angular = require('angular');
var app     = angular.module('App', []);

app.controller('Gallery', function ($scope, $http) {
  $http.get('./stub.json').
    success(function(data, status, headers, config){
      $scope.galleryItems = data;
    });
});
