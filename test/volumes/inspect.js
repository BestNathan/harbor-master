'use strict';

const Lab     = require('lab');
const harness = require('../harness');

const lab     = exports.lab = Lab.script();

lab.experiment('volumes - inspect', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/volumes/hello-world')
      .reply(200, {});

    const req = harness.client.volumes().inspect('hello-world');

    harness.handleSuccess(scope, 200, req, done);

  });

});
