var app = angular.module('import-poc', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'homeCtrl'
    })
    .state('search', {
      url: '/search',
      templateUrl:'app/search/search.html',
      controller: 'searchCtrl'
    })
});