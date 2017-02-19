var assert = require('chai').assert;
var expect = require('chai').expect;

require('../lib/array')

describe('Array', function() {
  describe('first()', function() {
    it('should exist', function() {
      expect([].first).to.exist;
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
      expect([].last).to.exist;
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
  describe('binaryIndexOfClosest()', function() {
    it('should exist', function() {
      assert.notEqual(undefined, [].binaryIndexOfClosest);
    });
    it('should return 0-index in one-elem array', function() {
      assert.equal(0, [1].binaryIndexOfClosest(2));
      assert.equal(0, [6].binaryIndexOfClosest(3));
    });
    it('should throw error when array is sorted wrong', function() {
      expect(() => [5,4,3].binaryIndexOfClosest(3)).to.throw(Error);
    });
    it('should find index there is searched element', function() {
      assert.equal(0, [1,2,3,4,5].binaryIndexOfClosest(1));
      assert.equal(1, [1,2,3,4,5].binaryIndexOfClosest(2));
      assert.equal(2, [1,2,3,4,5].binaryIndexOfClosest(3));
    });
    it('should search find the closest', function() {
      assert.equal(0, [1,2,3,4,5].binaryIndexOfClosest(1.1));
      assert.equal(1, [1,2,3,4,5].binaryIndexOfClosest(1.9));
      assert.equal(2, [1,2,3,4,5].binaryIndexOfClosest(3.1));
    });

    it('should work nice with boundaries', function() {
      assert.equal(0, [1,2,3,4,5].binaryIndexOfClosest(-99));
      assert.equal(4, [1,2,3,4,5].binaryIndexOfClosest(123));
    });
  })
});
