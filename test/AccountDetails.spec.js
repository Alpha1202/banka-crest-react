import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { AccountDetails } from '../src/components/userAccount/accountDetails';

const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    accountDetails: jest.fn(),
    auth: {
      accountnumber: '',
      balance: '',
      status: '',
      accType: '',
    },
  };
  let app;
  let store;
  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

    app = shallow(<AccountDetails store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders a section component', () => {
    expect(app.find('section').length).toBe(1);
  });
  it('renders a div component', () => {
    expect(app.find('div').length).toBe(17);
  });
  it('renders a Link component', () => {
    expect(app.find('Link').length).toBe(1);
  });
  it('renders a h1 component', () => {
    expect(app.find('h1').length).toBe(1);
  });
  it('renders a span component', () => {
    expect(app.find('span').length).toBe(1);
  });
});
