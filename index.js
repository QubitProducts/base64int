var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

module.exports = {
  encode: function encode64(num) {
    return map(toBase(num, 64), function (pos) {
      return base64Chars[pos];
    }).join('') || base64Chars[0];
  },
  decode: function decode64(base64) {
    return fromBase(map(base64.split(''), function (pos) {
      return base64Chars.indexOf(pos);
    }), 64);
  }
};

function fromBase(input, base) {
  var val = 0;
  for (var i = 0; i < input.length; i++) {
    val += Math.pow(base, (input.length - 1) - i) * input[i];
  }
  return val;
}

function toBase(value, outputBase) {
  var digits = [];
  while (value > 0) {
    var remainder = value % outputBase;
    digits.unshift(remainder);
    value = (value - remainder) / outputBase;
  }
  return digits;
}

function map(list, it) {
  var vals = [];
  for (var i = 0; i < list.length; i++) {
    vals.push(it(list[i], i));
  }
  return vals;
}