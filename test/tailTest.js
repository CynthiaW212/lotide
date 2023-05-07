const tail = require('../tail');
const assert = require('chai').assert;


const origin = ["Hello", "Lighthouse", "Labs"];
const result = tail(origin);

describe("#tail", () => {
  it("the length should be 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2);
  });
  it("the tail should be ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  it("the original array should not be changed. still is ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(origin, ['Hello', 'Lighthouse', 'Labs']);
  });
  it("the tail of ['Hello'] should be []", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
});
