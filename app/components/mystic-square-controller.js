(function (angular) {
  'use strict';
  angular.module('myAppComponent')
    .controller('MysticSquareController', MysticSquareController);

  function MysticSquareController(MysticSquareService) {    
    let vm = this;
    let rows = 4;
    let cols = 4;
    
    vm.tiles = [];
    vm.solve = solve;
    vm.tiles = MysticSquareService.mysticSquare(rows, cols);
    vm.move = moveTile;

    // moving the tiles
    function moveTile(row, col) {      
      let tile;
      let x;
      let y;   
      let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (let d = 0; d < dirs.length; d++) {
        x = row + dirs[d][0];
        y = col + dirs[d][1];
                     
        if (vm.tiles[x] && vm.tiles[x][y] === 0) {
          tile = vm.tiles[row][col];
          vm.tiles[row][col] = vm.tiles[x][y];
          vm.tiles[x][y] = tile;                        
        }
      }
    }
    
    function solve() {
      let ans;
      let increment;
      let result = false;
      if (vm.tiles[0][0] === 0) {
        ans = 0;
        increment = true;
      
      }
      else if (vm.tiles[0][0] === 15) {
        ans = 15;
        increment = false;
      }    
      for (let i = 0; i < vm.tiles.length; i++) {
        vm.tiles[i] = [];
        for (let j = 0; j < vm.tiles.length; j++) {
          if (vm.tiles[i][j] === ans) { 
            result = true;          
          }                
          if (increment) {
            ans++;
          }
          else { 
            ans--;
          }
        }
      }
      return result;
    }
  }     
})(window.angular);
   