var assert = require('chai').assert;

require('../lib/array')

describe('Array', function() {
  describe('first()', function() {
    it('method should exist', function() {
      assert.notEqual(undefined, [].first);
    });
    it('should return undefined when array is empty', function() {
      assert.equal(undefined, [].last());
    });
    it('should return first element from one-elem array', function() {
      assert.equal(1, [1].first());
    });
    it('should return first element from multielems arary', function() {
      assert.equal(4, [4, 6].first());
    });
  });
  describe('last()', function() {
    it('method should exist', function() {
      assert.notEqual(undefined, [].last);
    });
    it('should return undefined when array is empty', function() {
      assert.equal(undefined, [].last());
    });
    it('should return first element from one-elem array', function() {
      assert.equal(1, [1].last());
    });
    it('should return first element from multielems arary', function() {
      assert.equal(6, [4, 6].last());
    });
  });
});
