
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'data','LocalStorage'];


  //function MainController(LocalStorage, QueryService, getDataFromAPI, data) {
  function MainController($scope, data, LocalStorage) {

    // 'controller as' syntax
    var self = this;

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