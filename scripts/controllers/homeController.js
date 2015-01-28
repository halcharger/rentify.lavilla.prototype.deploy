'use strict';

/**
 * @ngdoc function
 * @name rentifylavillaprototypeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rentifylavillaprototypeApp
 */
angular.module('rentifylavillaprototypeApp')
  .controller('homeController', function () {

    loadHeroImg();
    initFormElements();
    initDatePickers();
    initFormValidation();
    initBgImages();

  });
