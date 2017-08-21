import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import Test5 from '../src/index';

describe('Test5', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<Test5 />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });

});