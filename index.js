module.exports = (list) => {
  // build histogram
  var hist = Array.prototype.reduce.call(list, (acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  // Sort values and return keys
  return Object.keys(hist).sort((a, b) => hist[b] - hist[a])
  // Remap the sorted key to an object
  .map(key => {
    var obj = {};
    obj[key] = hist[key];
    return obj;
  });

};