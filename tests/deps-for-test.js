'use strict';
var path = require('path');
var assert = require('assert');
var depsFor = require('../lib/deps-for');

var fixturesPath = path.join(__dirname, 'fixtures');

describe('depsFor', function() {
  it('Constructs a set of all dependencies recursively', function() {
    var expectedDeps = [{
      name: 'foo',
      version: '1.0.0',
      main: 'index.js',
      dependencies: {
        bar: '1.0.0',
        dedupped: '1.0.0'
      },
      path: path.join(fixturesPath, '/node_modules/foo/index.js'),
      baseDir: path.join(fixturesPath, '/node_modules/foo/')
    }, {
      name: 'bar',
      version: '1.0.0',
      main: 'index.js',
      path: path.join(fixturesPath, '/node_modules/foo/node_modules/bar/index.js'),
      baseDir: path.join(fixturesPath, '/node_modules/foo/node_modules/bar/')
    }, {
      name: 'dedupped',
      version: '1.0.0',
      main: 'index.js',
      dependencies: {
        'dedupped-child': '1.0.0'
      },
      path: path.join(fixturesPath, '/node_modules/dedupped/index.js'),
      baseDir: path.join(fixturesPath, '/node_modules/dedupped/')
    }, {
      name: 'dedupped-child',
      version: '1.0.0',
      main: 'index.js',
      path: path.join(fixturesPath, '/node_modules/dedupped/node_modules/dedupped-child/index.js'),
      baseDir: path.join(fixturesPath, '/node_modules/dedupped/node_modules/dedupped-child/')
    }];

    assert.deepEqual(depsFor('foo', fixturesPath), expectedDeps);
  });
});