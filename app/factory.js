;(function() {


  /**
   * Sample factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   *
   */
  angular
    .module('boilerplate')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', 'CONSTANTS'];


  ////////////


  function getDataFromAPI($http, CONSTANTS) {

    return {
      loadData: function() {
        console.log('%c running load data', 'color: green');
        return $http.get(CONSTANTS.API_URL).then(function(result){ return result.data; });
      }
    };
  }


})();
