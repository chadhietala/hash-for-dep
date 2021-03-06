'use strict';
var path = require('path');
var assert = require('assert');
var resolvePkg = require('../lib/resolve-pkg');

var fixturesPath = path.join(__dirname, 'fixtures');

describe('resolvePkg', function() {
  it('Resolves to the absolute main entry point path of the provided package', function() {
    assert.equal(resolvePkg('./'), path.resolve('./'));
    assert.equal(resolvePkg('foo', fixturesPath), path.join(fixturesPath, 'node_modules/foo/index.js'));
    assert.equal(resolvePkg('/my-cool/path/', fixturesPath), '/my-cool/path/');
  });
});
