(function (angular) {
  'use strict';
  angular.module('myAppComponent')
    .service('MysticSquareService', MysticSquareService);

  function MysticSquareService() {       
    let index = 0;
    let tiles = [];

    // setting up the tiles
    this.mysticSquare = function (row, col) {
      for (let i = 0; i < row; i++) {
        tiles[i] = [];
        for (let j = 0; j < col; j++) {
          tiles[i][j] = index;              
          index++;
        }
      }
      shuffle(tiles);
      return tiles;
    };
    // Shuffle the tiles
    function shuffle(a) {
      let q;
      
      for (let i = parseInt(Math.random() * 4, 0); i < 4; i++) {
        for (let j = parseInt(Math.random() * 4, 0); j < 4; j++) {
          q = a[i][j];
          a[i][j] = a[j][i];
          a[j][i] = q;  
        }
      }
      return a;
    }
   
  }
})(window.angular);
   