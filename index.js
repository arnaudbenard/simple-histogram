module.exports = function (list) {
  // build histogram
  var hist = Array.prototype.reduce.call(list, function (acc, value) {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  // Sort values and return keys
  return Object.keys(hist).sort(function (a, b) { return hist[b] - hist[a]; })
  // Remap the sorted key to an object
  .map(function (key) {
    var obj = {};
    obj[key] = hist[key];
    return obj;
  });

};