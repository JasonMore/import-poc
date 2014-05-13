describe('derpService >', function () {
   derpService = require('./derpService');

  it('adds', function () {
    expect(derpService.derp('hello', 'world')).toEqual('hello:world');
  });
});