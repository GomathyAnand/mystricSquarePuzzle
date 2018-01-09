describe('mystic square module', function () {
  'use strict';
  let MysticSquareTestCntrl;
  let MysticSquareTestService;  
  let tile;
  beforeEach(module('myApp'));
  beforeEach(module('myAppComponent'));
  beforeEach(function () {
    inject(function ($controller, _MysticSquareService_) {        
      MysticSquareTestCntrl = $controller('MysticSquareController');
      MysticSquareTestService = _MysticSquareService_;           
    });
  });
   
  it('expect MysticSquareTestService to be called', function () {    
    assert.equal(MysticSquareTestService.mysticSquare().length, 4);
  });
  
  it('expect tiles not to be null', function () {  
    assert.equal(MysticSquareTestCntrl.tiles.length, 4);
  });
  
  it('should moving  the item', function () {
    let i = 0;
    let j = 1;
    tile = MysticSquareTestCntrl.tiles; 
    expect(tile[0][0]).equal(0);
    MysticSquareTestCntrl.move(i, j);
    expect(tile[0][0]).not.equal(0);    
  });

  it('should test if swapping of number is happening', function () {
    let i = 1;
    let j = 0;
    tile = MysticSquareTestCntrl.tiles; 
    let a = tile[i][j];
    expect(tile[0][0]).equal(0);
    MysticSquareTestCntrl.move(i, j);
    expect(tile[0][0]).equal(a);
  });
  it('should test if swapping of number is happening in series', function () {
    let i = 0;
    let j = 1;
    tile = MysticSquareTestCntrl.tiles;     
    expect(tile[0][0]).equal(0);
    MysticSquareTestCntrl.move(i, j);
    expect(tile[i][j]).equal(0);
    // now the 0 is moved to tile[0][2] - moving horizontally
    MysticSquareTestCntrl.move(0, 2);
    expect(tile[0][2]).equal(0);
    // now the 0 is moved to tile[1][2] - moving vertically
    MysticSquareTestCntrl.move(1, 2);
    expect(tile[1][2]).equal(0);
  });
  it('should test if the field not next to zero is unmovable and only next to zero is movable', function () {
    tile = MysticSquareTestCntrl.tiles;
    let a = tile[1][1];
    expect(tile[0][0]).equal(0);
    MysticSquareTestCntrl.move(1, 1);
    expect(tile[1][1]).equal(a);
    MysticSquareTestCntrl.move(1, 0);
    expect(tile[1][0]).equal(0);
  });
  it('should test if the field not next to zero is unmovable', function () {
    tile = MysticSquareTestCntrl.tiles;
    let a = tile[2][2];
    MysticSquareTestCntrl.move(2, 2);
    expect(tile[2][2]).equal(a);
  });
  it('should test if the board is solved', function () {
    tile = MysticSquareTestCntrl.tiles;
    expect(tile[0][0]).equal(0);
    MysticSquareTestCntrl.solve();
    expect(MysticSquareTestCntrl.result).not.equal(true);
  });
});
