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

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
      url: '/',
      views: {
        'test1': {
          template: '<main-nav data="data.Navigation"></main-nav>', //
          controller: 'MainController'
        },
        'test2': {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        }
      },
      resolve: {
        data: function(getDataFromAPI) {
          return getDataFromAPI.loadData();
        }
      }
    });

    // routes
    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'views/home.html',
    //    controller: 'MainController',
    //    controllerAs: 'main',
    //    resolve: {
    //      data: function(getDataFromAPI) {
    //        return getDataFromAPI.loadData();
    //      }
    //    }
    //  })
    //  .when('/contact', {
    //    templateUrl: 'views/contact.html',
    //    controller: 'MainController',
    //    controllerAs: 'main'
    //  })
    //  .when('/setup', {
    //    templateUrl: 'views/setup.html',
    //    controller: 'MainController',
    //    controllerAs: 'main'
    //  })
    //  .otherwise({
    //    redirectTo: '/'
    //  });

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