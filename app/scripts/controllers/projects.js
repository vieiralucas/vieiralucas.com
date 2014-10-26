'use strict';

/**
 * @ngdoc function
 * @name vieiralucascomApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the vieiralucascomApp
 */
angular.module('vieiralucascomApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.tabActive = 'node';
    $scope.isActive = function(tab) {
        return tab === $scope.tabActive;
    }
    $scope.changeTab = function(tab) {
        $scope.tabActive = tab;
    }
  });
