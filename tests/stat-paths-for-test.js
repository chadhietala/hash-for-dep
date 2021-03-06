'use strict';
var path = require('path');
var assert = require('assert');
var statPathsFor = require('../lib/stat-paths-for');

var fixturesPath = path.join(__dirname, 'fixtures');

describe('statPathsFor', function() {
  it('Should return stat paths for a module', function() {
    var expectedStatPaths = [
      path.join(fixturesPath, '/node_modules/dedupped/'),
      path.join(fixturesPath, '/node_modules/dedupped/node_modules/dedupped-child/'),
      path.join(fixturesPath, '/node_modules/foo/')
    ];

    assert.deepEqual(statPathsFor('foo', fixturesPath), expectedStatPaths);
  });
});