var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

module.exports = {
  encode: function encode64(num) {
    return (prefix(num) + map(toBase(Math.abs(num), 64), function (pos) {
      return base64Chars.charAt(pos);
    }).join('')) || base64Chars.charAt(0);
  },
  decode: function decode64(base64) {
    return (prefix(base64) ? -1 : 1) * fromBase(map(base64.replace(/^-/, '').split(''), function (pos) {
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

function prefix(num) {
  if (String(num).charAt(0) === '-') return '-'
  return ''
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
