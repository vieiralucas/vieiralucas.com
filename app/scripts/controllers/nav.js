'use strict';

/**
 * @ngdoc function
 * @name vieiralucascomApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the vieiralucascomApp
 */
angular.module('vieiralucascomApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function(path) {
        if($location.path() === path) {
            return true;
        }
        return false;
    };
  });
