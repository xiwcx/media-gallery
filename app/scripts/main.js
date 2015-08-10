'use strict';

console.log('hello, world');

var gallery = angular.module('gallery', []);

gallery.controller('Gallery', function ($scope) {
  $scope.galleryItems = [
    {
      date: "2015-08-09",
      img: "http://www.fillmurray.com/g/1000/1000",
      title: "Bill Murray"
    },
    {
      date: "2015-08-08",
      img: "http://www.placecage.com/1000/1000",
      title: "Nic Cage"
    },
    {
      date: "2015-08-07",
      img: "http://www.stevensegallery.com/1000/1000",
      title: "Steven Segal"
    },
    {
      date: "2015-08-06",
      img: "http://www.nicenicejpg.com/1000/1000",
      title: "Robert Van Winkle"
    },
    {
      date: "2015-08-05",
      img: "http://www.placebear.com/1000/1000",
      title: "A Bear"
    },
    {
      date: "2015-08-04",
      img: "http://placekitten.com/1000/1000",
      title: "A Kitten"
    },
    {
      date: "2015-08-09",
      img: "http://www.fillmurray.com/g/1000/1000",
      title: "Bill Murray"
    },
    {
      date: "2015-08-08",
      img: "http://www.placecage.com/1000/1000",
      title: "Nic Cage"
    }
  ];
});
