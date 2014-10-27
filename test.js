var base64Int = require('./index');

describe('base64Int', function () {

  it('should encode/decode to the same number', function () {
    for (var i = 2; i < 52; i++) {
      var testNum = Math.pow(2, i) + Math.round(Math.random() * 10);
      expect(base64Int.decode(base64Int.encode(testNum))).to.be(testNum);
    }
  });
});