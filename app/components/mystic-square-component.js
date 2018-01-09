(function (angular) {
  'use strict';    
      
  angular.module('myAppComponent', [])
    .component('mysticSquare', {
      templateUrl: 'components/mystic-square.html',
      controller: 'MysticSquareController'       
    });    
})(window.angular);
     