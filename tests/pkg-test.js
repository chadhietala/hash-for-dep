'use strict';
var path = require('path');
var assert = require('assert');
var pkg = require('../lib/pkg');

var fixturesPath = path.join(__dirname, 'fixtures');

describe('pkg', function() {
  it('Loads the package.json for a given package, with { path, baseDir } added', function() {
    var expectedPkg = {
      name: 'foo',
      version: '1.0.0',
      main: 'index.js',
      dependencies: {
        bar: '1.0.0',
        dedupped: '1.0.0'
      },
      path: path.join(fixturesPath, '/node_modules/foo/index.js'),
      baseDir: path.join(fixturesPath, '/node_modules/foo/')
    };

    assert.deepEqual(pkg('foo', fixturesPath), expectedPkg);
  });
});