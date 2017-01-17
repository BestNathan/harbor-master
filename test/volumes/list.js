'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('volumes - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/volumes')
      .reply(200, {});

    harness.client.volumes().list().then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});