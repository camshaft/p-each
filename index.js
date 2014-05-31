/**
 * Module dependencies
 */

var Batch = require('batch');

/**
 * Iterate an item concurrently
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Function?} cb
 * @return {Batch}
 */

module.exports = function(arr, fn, cb) {
  var batch = new Batch();

  arr.forEach(function(item) {
    batch.push(function(done) {
      fn(item, done);
    });
  });

  if (cb) return batch.end(cb);
  return batch;
}
