import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/userAccount';

describe('App', () => {
  const props = {};
  let app;
  beforeEach(() => {
    app = shallow(<App {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
