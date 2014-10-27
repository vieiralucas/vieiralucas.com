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
    
    // controla as tabs
    $scope.tabActive = 'node';
    $scope.isActive = function(tab) {
        return tab === $scope.tabActive;
    };
    $scope.changeTab = function(tab) {
        $scope.tabActive = tab;
        $scope.projectsSelecionados = $scope.projects[tab];
    };

    $scope.hoverLink = function() {
        console.log(this);
    }

    $.getJSON('projects.json', function(data) {
        $scope.projects = {
            'node': data.node,
            'webapps': data.webapps,
            'games': data.games,
            'others': data.others
        };
        $scope.projectsSelecionados = $scope.projects.node;
        $scope.$apply();
    });
  });
