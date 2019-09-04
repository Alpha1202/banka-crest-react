import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/inputs';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });
  it('renders a label component', () => {
    expect(app.find('label').length).toBe(1);
  });
  it('renders a input component', () => {
    expect(app.find('input').length).toBe(1);
  });
});
