'use strict';

class TestService {
  constructor(options) {
    this.options = Object.assign({}, options);
  }

  key(key) {
    if (!key) return this.options.key;
    Object.assign(this.options, { key });
  }
}

module.exports = TestService;
