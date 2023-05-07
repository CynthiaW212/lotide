
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("the middle item of [1, 2, 3, 4, 5] should be [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
  it("the middle item of [1, 2, 3, 4, 5, 6] should be [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
  it("the middle item of [1, 2] should be []", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
  it("the middle item of [1] should be []", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("the middle item of [] should be []", () => {
    assert.deepEqual(middle([]),[]);
  });

});
