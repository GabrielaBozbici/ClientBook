'use strict';

angular.module('app')
  .controller('clientListController', function ($scope) {
    $scope.date = new Date();
    console.log('aaa', $scope.date);
  });
