'use strict';

angular.module('app')
  .controller('projectListController', function ($scope, $rootScope) {
    $scope.date = new Date();
      $rootScope.pageTitle = "Project List";

      

  });
