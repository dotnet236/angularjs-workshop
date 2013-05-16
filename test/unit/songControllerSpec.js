describe('SongCtrl', function(){
  it('should be defined', function() {
    var scope = {};
    var ctrl = new SongCtrl(scope);

    expect(ctrl).toBeDefined();
  });

  it('should create two items in our songs model', function() {
    var scope = { }
    var ctrl = new SongCtrl(scope);

    expect(scope.songs.length).toBe(2);
  });
});
