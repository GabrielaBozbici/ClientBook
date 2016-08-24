'use strict';

angular.module('app')
  .controller('clientListController', function ($scope, $rootScope) {
    $scope.date = new Date();
    $rootScope.pageTitle = "Client List";
  });
