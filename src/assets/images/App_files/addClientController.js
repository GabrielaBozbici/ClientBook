'use strict'

angular.module('app')
  .controller('addClientController', function ($scope, $rootScope) {
    $scope.date = new Date();
    $rootScope.pageTitle = "Add Client";
  });
