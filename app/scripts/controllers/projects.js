'use strict';

/**
 * @ngdoc function
 * @name dsilvaApp.controller:AboutCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the dsilvaApp
 */
angular.module('dsilvaApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
