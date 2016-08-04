/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'data','LocalStorage'];


  //function MainController(LocalStorage, QueryService, getDataFromAPI, data) {
  function MainController($scope, data, LocalStorage) {

    // 'controller as' syntax
    var self = this;


    LocalStorage.remove('data');
    LocalStorage.set('data', data);

    $scope.data = data;

    console.log('data', LocalStorage.get('data'));

    //getDataFromAPI.loadData().then(function(data) { console.log('data', data); });

    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();