/* global p0TeamB, describe, it, expect, should */

describe('p0TeamB()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamB).to.be.a('function');

  });

  it('Cubed of 2', function () {
    expect(p0TeamB()).to.equal(8);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
