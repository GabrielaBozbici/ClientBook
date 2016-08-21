(function(){
  "use strict";

  angular.module('app')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('clientList', {
        url: '/clientList',
        templateUrl: 'app/pages/clientlist/clientlist.html',
        controller: 'clientListController'
      })
      .state('projectList', {
        url: '/projectList',
        templateUrl: 'app/pages/projectlist/projectlist.html',
        controller: 'projectListController'
      });
  });


})();
