'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
  });

it('should have good title', function () {
    expect(browser.getTitle()).toEqual('filterPastDate');
  });

  


});
