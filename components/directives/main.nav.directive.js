;(function() {

  'use strict';

  /**
   * Main navigation
   * @author Alexander Marinov
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('boilerplate')
    .directive('mainNav', ['LocalStorage', tinMainNav]);

  function tinMainNav(LocalStorage) {

    console.log('LocalStorage', LocalStorage);

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/main-nav.html',
      scope: {
        data: '=data'
      }
    };

    return directiveDefinitionObject;
  }

})();