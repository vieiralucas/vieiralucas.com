"use strict";angular.module("vieiralucascomApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("vieiralucascomApp").controller("HomeCtrl",["$scope",function(a){a.a="a"}]),angular.module("vieiralucascomApp").controller("ProjectsCtrl",["$scope",function(a){a.tabActive="javascript",a.isActive=function(b){return b===a.tabActive},a.changeTab=function(b){a.tabActive=b,a.projectsSelecionados=a.projects[b]},a.hoverLink=function(){console.log(this)},$.getJSON("projects.json",function(b){a.projects={javascript:b.javascript,webapps:b.webapps,games:b.games,others:b.others},a.projectsSelecionados=a.projects.javascript,a.$apply()})}]),angular.module("vieiralucascomApp").controller("NavCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return b.path()===a?!0:!1}}]);