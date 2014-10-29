var base64Int = require('./index');
var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

describe('base64Int', function () {

  it('should encode/decode to the same number', function () {
    for (var i = 2; i < 52; i++) {
      var testNum = Math.pow(2, i) + Math.round(Math.random() * 10);
      expect(base64Int.decode(base64Int.encode(testNum))).to.be(testNum);
    }
  });

  describe('numbers less than 64', function () {

    it('should return the character at the number\'s index', function () {
      var i = 0, l = 64;
      for (i = 0; i < l; i++) {
        expect(base64Int.encode(i)).to.be(base64Chars[i]);
      }
    });

  });
  
  it('should encode arbitrary numbers into base 64', function () {
    expect(base64Int.encode(128)).to.be('CA');
    expect(base64Int.encode(129)).to.be('CB');
    expect(base64Int.encode(1928736)).to.be('HW4g');
  });

});