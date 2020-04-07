'use strict';

const TestService = require('../src/services/testService');

test('test', () => {
  const testService = new TestService({ key: 'test' });
  expect(testService.key()).toEqual('test');
});