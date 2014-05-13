describe('derpService >', function () {
  var expect = require('expect.js'),
   derpService = require('./derpService');

  it('adds', function () {
    expect(derpService.derp('hello', 'world')).to.equal('hello:world');
  });
});