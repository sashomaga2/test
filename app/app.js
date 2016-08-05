/**
 * @description           vm task
 * @author                Aleksander Marinov
 * @version               1.0
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('boilerplate', [
      'ui.router'
    ])
    .config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
      url: '/',
      views: {
        'nav': {
          template: '<main-nav data="data.Navigation"></main-nav>', //
          controller: 'MainController'
        },
        'main': {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        }
      },
      resolve: {
        data: function(QueryService) {
          //return getDataFromAPI.loadData();
          //TODO use QueryService
          return QueryService.query('get', "").then(function(result) { return result.data; } );
        }
      }
    });

    // routes
    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  angular
    .module('boilerplate')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('boilerplate')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    console.log('on page load!');

  }


})();