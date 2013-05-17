describe('Song table', function() {
  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should start with two songs listed', function() {
    expect(repeater('.songs').count()).toBe(2);
  });

  it('should add the song a user enters to the list', function() {
    input('song.name').enter('Song 1')
    element('button', 'add button').click()
    expect(repeater('.songs').count()).toBe(3);
  });
});
