import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../client/src/foo.jsx');

const Foo = require('../client/src/foo.jsx');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    //expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    //expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    //expect(mount(<Foo />).find('.foo').length).toBe(1);
  });
});