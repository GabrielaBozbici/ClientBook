(function(){
  "use strict";

  angular.module('app')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('clientList', {
        url: '/clientList',
        templateUrl: 'app/pages/clientList/clientList.html',
        controller: 'clientListController'
      })
      .state('projectList', {
        url: '/projectList',
        templateUrl: 'app/pages/projectList/projectList.html',
        controller: 'projectListController'
      })
      .state('addClient', {
        url: '/addClient',
        templateUrl: 'app/pages/addClient/addClient.html',
        controller: 'addClientController'
      })
  });


})();
