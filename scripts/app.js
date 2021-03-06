'use strict';

angular
  .module('rentifylavillaprototypeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/availability', {
        templateUrl: 'views/availability.html',
        controller:'availabilityController'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller:'galleryController'
      })
      .when('/onlinepayment', {
        templateUrl: 'views/onlinepayment.html'
      })
      .when('/rates', {
        templateUrl: 'views/rates.html'
      })
      .when('/reviews', {
        templateUrl: 'views/reviews.html'
      })
      .when('/booking', {
        templateUrl: 'views/booking.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
